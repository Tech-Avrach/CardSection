import React from "react";
import styles from "./Testimonials.module.css";


const testimonialsData = [
    {
        stars: 5,
        review:
            "Morbi quis posuere lacus. Morbi et metus sit amet tellus dapibus aliquam. Morbi consectetur magna vel turpis lobortis lorem iopsum dolor sit commodo.",
        name: "John Deo",
        title: "Web Developer, UK",
        img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
    {
        stars: 5,
        review:
            "Curabitur sollicitudin mi et sagittis egestas. Curabitur pellentesque nibh id enim hendrerit, at mollis neque rutrum. Sed nibh velit, tristique et dolor vitae.",
        name: "Rubik Nanda",
        title: "Web Developer, UK",
        img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
    {
        stars: 5,
        review:
            "Vestibulum in lobortis purus. Quisque sem turpis, hendrerit quis lacus vel, vestibulum vulputate velit. Nullam lobortis rhoncus tincidunt lorem ispun dnascetur ridiculus mus.",
        name: "Barry Watson",
        title: "Web Developer, UK",
        img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
    // Add more testimonials
    // {
    //     stars: 5,
    //     review:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    //     name: "Alice Smith",
    //     title: "Product Manager, US",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
    // {
    //     stars: 4,
    //     review:
    //         "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    //     name: "Bob Johnson",
    //     title: "Designer, UK",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
    // {
    //     stars: 5,
    //     review:
    //         "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    //     name: "Carol Lee",
    //     title: "Developer, AU",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
    // {
    //     stars: 5,
    //     review:
    //         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     name: "David Brown",
    //     title: "Marketer, CA",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
    // {
    //     stars: 5,
    //     review:
    //         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //     name: "Eva Green",
    //     title: "Sales Manager, FR",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
    // {
    //     stars: 5,
    //     review:
    //         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     name: "Frank White",
    //     title: "HR Specialist, DE",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
    // {
    //     stars: 5,
    //     review:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    //     name: "Grace Kelly",
    //     title: "Consultant, IT",
    //     img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    // },
];

const Testimonials = () => {
    return (
        <div className={styles.testimonialsComponent}>
            <div className={styles.header}>
                <p className={styles.smallTitle}>TESTIMONIALS</p>
                <h2 className={styles.mainHeading}>Don’t just take our word for it.</h2>
                <p className={styles.subHeading}>
                    12+ million people are already learning on Geeks
                </p>
            </div>
            <div className={styles.cards}>
                {testimonialsData.map((testimonial, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardContent}>
                            <div className={styles.stars}>
                                {"⭐".repeat(testimonial.stars)}
                            </div>
                            <div className={styles.reviewBody}>
                                <p className={styles.review}>{testimonial.review}</p>
                            </div>
                            <hr className={styles.line} />
                        </div>
                        <div className={styles.userInfo}>
                            <img
                                src={testimonial.img}
                                alt={testimonial.name}
                                className={styles.userImg}
                            />
                            <div>
                                <p className={styles.userName}>{testimonial.name}</p>
                                <p className={styles.userTitle}>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className={styles.arrows}>
                <span className={`${styles.arrow} ${styles.left}`}>{"<"}</span>
                <span className={`${styles.arrow} ${styles.right}`}>{">"}</span>
            </div> */}
        </div>
    );
};

export default Testimonials;
