import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
    const [noChecked, setNoChecked] = useState(false);
    const [yesChecked, setYesChecked] = useState(false);
    const [sixth, setSixth] = useState(false);
    
    const handleNoClick=()=>{
        setNoChecked(true);
        setYesChecked(false)
    }
    const handleYesClick=()=>{
        setYesChecked(true);
        setNoChecked(false)
    }
    const handleNext=()=>{
        if(noChecked){
        setSixth(true)
        }
    }
	return (
		<div className="form-container">
        <div className="form">
			<div className="form-sections">
				<div className="form-sections_title">
					<h3>Təhsil</h3>
				</div>
				<div className="form-sections_title">
					<h3>Dil Bilikləri</h3>
				</div>
				<div className="form-sections_title">
					<h3>Xüsusi bacarıqlar</h3>
				</div>
				<div className="form-sections_title">
					<h3>Idman</h3>
				</div>
				<div  className={`experience ${sixth ? 'no-experience' : ''}`}>
					<span>5</span>
					<h3>İş təcrübəsi</h3>
				</div>
				<div className={`form-sections_title ${sixth ? 'experience' : ''}`}>
					<h3>Proqram bilikləri</h3>
				</div>
			</div>
			<div className="form-contents">
				<div className="form-contents_title">
					<h2>İş təcrübəsi</h2>
					<div className="form-contents_section-count">
						<span>1</span>
					</div>
				</div>
				<div className="form-contents_questions">
					<h3>İş təcrübəniz var?</h3>
				</div>
				<div className="form-contents_answers">
					<div className="yes" onClick={()=>handleYesClick()}>
                    <span style={{ color: yesChecked ? '#038477' : '' }}>Bəli</span>
                    <div className={`checkbox ${yesChecked ? 'active' : ''}`}></div>
                    </div>
					<div className="no" onClick={()=>handleNoClick()}>
                    <span style={{ color: noChecked ? '#038477' : '' }}>Xeyr</span>
                    <div className={`checkbox ${noChecked ? 'active' : ''}`}></div>
                    </div>
				</div>
			</div>
		</div>
        <div className="form-buttons">
          <button className="back"><i class="fa-solid fa-arrow-left"></i> Geri</button>
          <button className="next" onClick={()=>handleNext()}>Növbəti <i class="fa-solid fa-arrow-right" style={{color: "#ffffff",marginLeft:10}}></i></button>
        </div>
        </div>

	);
};

export default Form;
