import styles from './porfile.module.css';

export function ImageProfile() {
    return (
        <>
            <video className={`${styles.desktop} art:border:r-02`}
                controls={false}
                autoPlay
                loop
                muted
            >
                <source src="videos/arthur_profile.mp4" type="video/mp4" />
            </video>

            <video className={`${styles.mobile} art:border:r-02`}
                controls={false}
                autoPlay
                loop
                muted
            >
                <source src="videos/arthur_profile_mobile.mp4" type="video/mp4" />
            </video>
        </>
    );
}