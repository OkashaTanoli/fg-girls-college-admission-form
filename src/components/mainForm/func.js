import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase/firebase";


export const submitForm = (e, navigate, setLoad, obj) => {
    e.preventDefault();
    setLoad(true)
    onValue(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/sr_no`), (snapshot) => {
        if (obj.group === 'medical' && snapshot.val() === 150) {

            const d = String(new Date());
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/sr_no`),
                501
            )
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/students/501`),
                { serial_no: 501, submitdate: d, ...obj }
            )
                .then(() => {
                    setLoad(false)
                    // let path = updated_serial_no;
                    navigate(`admitcard/501`, { replace: true });
                })
            return;

        }

        else if (obj.group === 'eng' && snapshot.val() === 300) {

            const d = String(new Date());
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/sr_no`),
                701
            )
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/students/701`),
                { serial_no: 701, submitdate: d, ...obj }
            )
                .then(() => {
                    setLoad(false)
                    // let path = updated_serial_no;
                    navigate(`admitcard/701`, { replace: true });
                })
            return;
        }


        else if (obj.group === 'ics' && snapshot.val() === 400) {
            
            const d = String(new Date());
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/sr_no`),
                1001
            )
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/students/1001`),
                { serial_no: 1001, submitdate: d, ...obj }
            )
                .then(() => {
                    setLoad(false)
                    // let path = updated_serial_no;
                    navigate(`admitcard/1001`, { replace: true });
                })
            return;

        }


        else if (obj.group === 'arts' && snapshot.val() === 500) {
            const d = String(new Date());
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/sr_no`),
                901
            )
            set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/students/901`),
                { serial_no: 901, submitdate: d, ...obj }
            )
                .then(() => {
                    setLoad(false)
                    // let path = updated_serial_no;
                    navigate(`admitcard/901`, { replace: true });
                })
            return;
        }





        if (obj.group === 'medical' && snapshot.val() === 700) {
            alert("Seats are full for Medical")
            setLoad(false)
            return;
        }
        else if (obj.group === 'engineering' && snapshot.val() === 900) {
            alert("Seats are full for Engineering")
            setLoad(false)
            return;
        }
        else if (obj.group === 'ics' && snapshot.val() === 1100) {
            alert("Seats are full for ICS")
            setLoad(false)
            return;
        }
        else if (obj.group === 'arts' && snapshot.val() === 1000) {
            alert("Seats are full for Arts")
            setLoad(false)
            return;
        }






        let sr_no = snapshot.val();
        let updated_serial_no = sr_no + 1

        let d = String(new Date());

        set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/sr_no`),
            updated_serial_no
        )
        set(ref(db, `fg_girls_inter_college/federal_board/${obj.group}/students/` + updated_serial_no),
            { serial_no: updated_serial_no, submitdate: d, ...obj }
        )
            .then(() => {
                setLoad(false)
                let path = updated_serial_no;
                navigate(`admitcard/${path}`, { replace: true });
            })

    },
        {
            onlyOnce: true
        });

}