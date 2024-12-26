// import styles from "./porfile.module.css";

// import desktop from "@/assets/videos/arthur_profile.mp4"

/* import desktop from "@/assets/videos/arthur_profile.mp4"; */

export function ImageProfile() {
    return (
        <>
        olá
            <video width="500" controls>
                {/* <source src="../../../assets/videos/arthur_profile.mp4" type="video/mp4" /> */}
                <source src="/videos/arthur_profile.mp4" type="video/mp4" />
            </video>
        </>
    );
}