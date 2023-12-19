import rec1 from "../assets/images/rec1.jpg";
import rec2 from "../assets/images/rec2.jpg";

function Recommended(){
    return(
        <div class="recommended">
        <div class="recommended-section1">
            <h1>Recommended for You</h1>
            <h5>Pick the best fit</h5>
        </div>
        <div class="recommended-section2">
            <div class="recommended-section2__courses">  
                <img src={rec1} alt="Recommended" />
                <h3>2023 Python Data Visual Masterclass</h3>
                <p>Col stee</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
            <div class="recommended-section2__courses">
                <img src={rec2} alt="Recommended" />
                <h3>Web Development Bootcamp 2023 - Advance</h3>
                <p>Col stee</p>
                <p>4.8 ⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
            <div class="recommended-section2__courses">
                <img src={rec1} alt="Recommended" />
                <h3>Master UI/UX Design with Figma Rules</h3>
                <p>Col stee</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
            <div class="recommended-section2__courses">
                <img src={rec2} alt="Recommended" />
                <h3>Basic to Advance Java Core Training Visual Masterclass</h3>
                <p>Col stee </p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
        </div>
    </div> 

    )
}

export default Recommended