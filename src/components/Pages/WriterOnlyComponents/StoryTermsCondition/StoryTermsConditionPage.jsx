import React from "react";
import PrivacyPolicy from "../StoryPrivacyPolicy/StoryPrivacyPolicyPage";

const TermsConditions = () => {
    const termsContent = (
        <>
            <h4>Lorem Ipsum</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                velit esse molestie consequat.
            </p>

            <h4>Lorem Ipsum</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                velit esse molestie consequat.
            </p>

            <h4>Lorem Ipsum</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                velit esse molestie consequat.
            </p>
        </>
    );

    return (
        <PrivacyPolicy subtitle="Terms & Conditions" content={termsContent} />
    );
};

export default TermsConditions;
