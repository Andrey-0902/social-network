import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <section className={classes.dialogsSection}>
            <ul className={classes.dialogsList}>
                <li className={classes.gialog + " " + classes.active}>Конь в пальто</li>
                <li className={classes.gialog}>Мышка норушка</li>
                <li className={classes.gialog}>Кот в сапогах</li>
                <li className={classes.gialog}>Егоза</li>
                <li className={classes.gialog}>Панда</li>
            </ul>
            <ul className={classes.messagesList}>
                <li className={classes.messageItem}>Привет, как дела?</li>
                <li className={classes.messageItem}>Учу React</li>
                <li className={classes.messageItem}>Yo</li>
            </ul>
        </section>
    )
}

export default Dialogs