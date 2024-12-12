import React from 'react'
function FooterReader() {
    return ( 
        <footer className="bg-[#FFFFFF] text-[#001F54] w-full font-inter font-medium text-sm mt-5 md:text-lg lg:text-sm  md:p-4 text-center  ">
        <div className='inline-flex gap-5'>
            <div>
                <p>Food</p>
                <p>Music</p>
                <p>Contact us</p>
            </div>
            <div>
                <p>Relationships</p>
                <p>Sports</p>
                <p>FAQ & Privacy</p>
                <p>About</p>
            </div>
            <div>
                <p>Fashion & Lifestyle</p>
                <p>Education</p>
            </div>
        </div>
        <p>Copyright &copy; Mentorship For Acceleration 2024. All Rights Reserved</p>
    </footer>
    )

}

export default FooterReader