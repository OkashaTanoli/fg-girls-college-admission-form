import React, { useState,useEffect } from 'react';
import './mainForm.css'
import { submitForm } from './func';
import { useNavigate } from "react-router-dom";
import '../admitcard/loader.css'
// import '../admitcard/loader.css'
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/firebase";
import '../../App.css'

function MainForm() {
    let navigate = useNavigate();


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fathername, setFathername] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [DOB, setDOB] = useState('')
    const [category, setCategory] = useState('')
    const [sscBoard, setSscBoard] = useState('')
    const [sscMarks, setSscMarks] = useState('')
    const [sscPercentage, setSscPercentage] = useState('')
    const [sscYear, setSscYear] = useState('')
    const [group, setGroup] = useState('')
    const [address, setAddress] = useState('')

    const [load, setLoad] = useState(false)
    const [mainload, setMainload] = useState(true)
    const [formActive, setFormActive] = useState(false)



    useEffect(() => {
        onValue(ref(db, `fg_girls_inter_college/federal_board/active`), (snapshot) => {
            setFormActive(snapshot.val())
            setMainload(false)
        }, { onlyOnce: true })

    }, [formActive])

    if (mainload) {
        return (
            <div className='loader_div'>
                <div className="loader"></div>
            </div>
        )
    }

    if (!formActive) {
        return (
            <div className='BeforeTestDiv'>
                <h1 className='BeforeTestDivHead'>FG GIRLS INTER COLLEGE KARACHI CANTT</h1>
                <div className='BeforeTestDivCenter'>
                    <h1>Admission Will Open On (4th August)</h1>
                </div>
            </div>
        )
    }



    // const percentageChecker = (e) => {
    //     e < 50 ? setSscPercentage(50) : e > 100 ? setSscPercentage(100) : setSscPercentage(e)
    // }
    return (
        <div className='main_div'>
            <header>
                <h1>FG Girls Inter college karachi cantt</h1>
            </header>

            <h3>Online Registration Form For Admission ( Only For Federal Board 2022-2023 )</h3>

            <form onSubmit={(e) => submitForm(e, navigate, setLoad, { name, email, fathername, whatsapp, phonenumber, DOB, category, sscBoard, sscMarks, sscPercentage, sscYear, group, address })}>
                {/* <p className='note'>NOTE: Please fill all fields carefully</p> */}
                <ol className='note'> 
                <li>Form should be filled once not twice.</li>
                    <li>Provide correct information, forms with  incorrect information is liable to be rejected</li>
                    <li>Bring photocopy of mark sheet on test day.</li>
                </ol>
                {/* <!-- <div className="form-group"> --> */}
                <label htmlFor="name">Name<span className="asteric">*</span></label>
                <input type="text" id="name" placeholder="Enter your Name" required value={name} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="email">Email<span className="asteric">*</span></label>
                <input type="email" id="Email" placeholder="Enter your Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="fatherName">Father Name<span className="asteric">*</span></label>
                <input type="text" id="fatherName" placeholder="Enter your Father Name" required value={fathername} onChange={(e) => { setFathername(e.target.value) }} />

                <label htmlFor="whatsappNumber">WhatsApp Number<span className="asteric">*</span></label>
                <input type='tel' id="whatsappNumber" placeholder="03XX-XXXXXXX" pattern="03[0-9]{2}-[0-9]{7}" required value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                <p className='message'>Format : 03XX-XXXXXXX</p>

                <label htmlFor="phoneNumber">Phone Number<span className="asteric">*</span></label>
                <input type='tel' id="phoneNumber" placeholder="03XX-XXXXXXX" pattern="03[0-9]{2}-[0-9]{7}" required value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} />
                <p className='message'>Format : 03XX-XXXXXXX</p>

                <label htmlFor="dob">Date of Birth<span className="asteric">*</span></label>
                <input type="date" id="dob" required min="2002-01-01" max="2007-12-31" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value={DOB} onChange={(e) => { setDOB(e.target.value) }} />
                {/* <!--pattern="\d{4}-\d{2}-\d{2}"--> */}

                {/* <div className="padding">
                    <label for="fb">Federal Board</label>
                    <input type="radio" name="board" id="fb">
                        <label for="kb">Karachi Board</label>
                        <input type="radio" name="board" id="kb">
                        </div> */}



                <label htmlFor="formCategory">Category<span className="asteric">*</span></label>
                <select name="category" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <option value="0" defaultChecked>Select Category</option>
                    <option value="Armed Forces">Armed Forces</option>
                    <option value="Retired Army">Retired Army</option>
                    <option value="Defence Paid">Defence Paid</option>
                    <option value="FGEI Employee">FGEI Employee</option>
                    <option value="Civilian">Civilian</option>
                    <option value="Sports">Sports</option>
                </select>


                <label htmlFor="form_ssc_board">SSC/Matriculation Board<span className="asteric">*</span> </label>
                <select name="form_ssc_passYear" value={sscBoard} onChange={(e) => { setSscBoard(e.target.value) }}>
                    <option value="0" defaultChecked>Select Board</option>
                    <option value="Federal Board">Federal Board</option>
                    <option value="O Level">O/A Levels</option>
                    <option value="Aga Khan">Aga Khan Board</option>
                    {/* <option value="Sindh Board">Sindh Board</option> */}
                </select>



                <label htmlFor="form_ssc_marks">SSC/Matriculation Marks<span className="asteric">*</span></label>
                <input id="form_ssc_marks" type="number" name="ssc_marks" min="1" max="1100"
                    placeholder="Please enter SSC Marks" required value={sscMarks} onChange={(e) => { setSscMarks(e.target.value) }} />

                <label htmlFor="form_ssc_percentage">SSC/Matriculation Percentage<span className="asteric">*</span></label>
                <input id="form_ssc_percentage" type="number" name="ssc_percentage" min="50" max="100"
                    placeholder="Please enter SSC Percentage" required value={sscPercentage} onChange={(e) => { setSscPercentage(e.target.value); setGroup('') }} />
                <p className='message'>Percentage should be greater than 50</p>
                <label htmlFor="form_ssc_passYear">SSC/Matriculation Passing Year<span className="asteric">*</span> </label>
                <select name="form_ssc_passYear" value={sscYear} onChange={(e) => { setSscYear(e.target.value) }}>
                    <option value="0" defaultChecked>Select Passing Year</option>
                    <option value="2022">2022</option>
                </select>


                <label htmlFor="group">Chose your Group:<span className="asteric">*</span> </label>
                <select name="group" id="group" value={group} onChange={(e) => { setGroup(e.target.value) }}>
                    <option value="0" defaultChecked>Select Group for (XI) </option>
                    {
                        sscPercentage < 60 ?
                            <option value="arts">Arts </option>
                            :
                            <>
                                <option value="ics">Computer Science </option>
                                <option value="engineering">Pre Engineering </option>
                                <option value="medical">Pre Medical </option>
                                <option value="arts">Arts </option>
                            </>

                    }
                    {/* <!-- <option value="arts"></option> --> */}

                </select>

                <label htmlFor="form_message">Home Address<span className="asteric">*</span></label>
                <textarea id="form_message" name="address" placeholder="Home Address" rows="4" required value={address} onChange={(e) => { setAddress(e.target.value) }}></textarea>



                <p id="errorMsg"></p>
                {
                    category !== '' && category !== '0' && sscBoard !== '' && sscBoard !== '0' && sscYear !== '' &&
                        sscYear !== '0' && group !== '' && group !== '0' && name !== '' && email !== '' &&
                        fathername !== '' && whatsapp !== '' && phonenumber !== '' && DOB !== '' && sscMarks !== '' && sscPercentage !== '' &&
                        address !== '' ?
                        <div className="mainDiv"><button type="submit" className="submit secondBTN" >{load ? <div className='loader3_div'><div class="loader3"></div></div> : "SUBMIT"}</button></div>
                        :
                        <div className="mainDiv"><button type="button" className="not_submit" onClick={() => { console.log("fill all fields") }}>SUBMIT</button></div>

                }


                <p className="thin">* These fields are required.</p>
            </form>
            <div style={{ fontSize: "16px", textAlign: 'center', padding: '10px 0', backgroundColor: '#798b01', color: 'white', width: '100%' }}>
                <p><a href='https://okasha-tanoli-portfolio.surge.sh/' target="__blank" style={{ marginRight: '5px', color: 'white', textDecoration: 'none' }}>OKASHA_TANOLI</a> copyright © 2022</p>
                {/* <p>Designed by <a href='https://instagram.com/shehza.d' target="__blank">Shehzad Iqbal</a></p> */}
            </div>

        </div>
    );
}

export default MainForm;