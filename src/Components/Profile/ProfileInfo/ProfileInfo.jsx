import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <section className={classes.sectionInfo}>
                <img className={classes.imgView} src="https://avatars.mds.yandex.net/i?id=5ff0bca997edbf6d1fc20ce56034a496-5878999-images-thumbs&n=13" alt=""/>
                <img className={classes.imgAvatar} src="https://avatars.mds.yandex.net/i?id=950c5627823560d0f8d4020de1e0ff9d-5887217-images-thumbs&n=13" alt=""/>
                <p className={classes.information}>information</p>
            </section>
    );
};

export default ProfileInfo;