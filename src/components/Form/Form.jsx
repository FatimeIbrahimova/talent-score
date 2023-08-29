import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
	const [noChecked, setNoChecked] = useState(false);
	const [yesChecked, setYesChecked] = useState(false);
	const [sixth, setSixth] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [openOptionsDegree, setOpenOptionsDegree] = useState(false);
	const [chooseOption, setChooseOption] = useState(false);
	const [chooseOptionDegree, setChooseOptionDegree] = useState(false);
	const [clickedText, setClickedText] = useState("");
	const [clickedTextDegree, setClickedTextDegree] = useState("");
	const [down, setDown] = useState(false);
	const [inputDisabled, setInputDisabled] = useState(false);
	const [downDegree, setDownDegree] = useState(false);
	const [labour, setLabour] = useState([
		{ name: "Fiziki əmək" },
		{ name: "Sənət" },
		{ name: "Ali ixtisas" },
		{ name: "Sahibkar" },
	]);
	const [degree, setDegree] = useState([
		{ name: "Təcrübəçi" },
		{ name: "Kiçik mütəxəssis" },
		{ name: "Mütəxəssis" },
		{ name: "Baş mütəxəssis" },
		{ name: "Unit Leader" },
		{ name: "Departament Head" },
		{ name: "C-level" },
	]);
	//values
	const [state,setState]=useState([])
	const [value,setValue]=useState("")
	const [valuePositon,setValuePosition]=useState("")
	const [dateStart,setDateStart]=useState("")
	const [dateEnd,setDateEnd]=useState("")

	const handleNoClick = () => {
		setNoChecked(true);
		setYesChecked(false);
	};
	const handleYesClick = () => {
		setYesChecked(true);
		setNoChecked(false);
	};
	const handleNext = () => {
		if (noChecked) {
			setSixth(true);
		}
	};
	const handleOpenOptions = () => {
		setOpenOptions(!openOptions);
		setDown(!down);
		setOpenOptionsDegree(false);
	};
	const handleOpenOptionsDegree = () => {
		setOpenOptionsDegree(!openOptionsDegree);
		setDownDegree(!downDegree);
		setOpenOptions(false);
	};
	const handleChooseOption = (e) => {
		setChooseOption(true);
		const spanContent = e.target.textContent;
		setClickedText(spanContent);
		setOpenOptions(false);
	};
	console.log(clickedText);
	const handleChooseOptionDegree = (e) => {
		setChooseOptionDegree(true);
		const spanContent = e.target.textContent;
		setClickedTextDegree(spanContent);
		setOpenOptionsDegree(false);
	};
	console.log(clickedTextDegree);
	const handleDisable=()=>{
		setInputDisabled(!inputDisabled);
	}
	//values
	const handleChange=(e)=>{
         setValue(e.target.value)
	}
	console.log(value);
	const handlePositionChange=(e)=>{
		setValuePosition(e.target.value)
   }
   console.log(valuePositon);
   const handleChangeDateStart=(e)=>{
	setDateStart(e.target.value)
   }
   console.log(dateStart);
   const handleChangeDateEnd=(e)=>{
	setDateStart(e.target.value)
   }
   console.log(dateEnd);
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
					<div className={`experience ${sixth ? "no-experience" : ""}`}>
						<span>5</span>
						<h3>İş təcrübəsi</h3>
					</div>
					<div className={`form-sections_title ${sixth ? "experience" : ""}`}>
						<span className="six">6</span>
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
						<div className="yes" onClick={() => handleYesClick()}>
							<span style={{ color: yesChecked ? "#038477" : "" }}>Bəli</span>
							<div className={`checkbox ${yesChecked ? "active" : ""}`}></div>
						</div>
						<div className="no" onClick={() => handleNoClick()}>
							<span style={{ color: noChecked ? "#038477" : "" }}>Xeyr</span>
							<div className={`checkbox ${noChecked ? "active" : ""}`}></div>
						</div>
					</div>
					<div
						className={`form-contents-yes_questions ${
							yesChecked ? "yes-questions" : ""
						}`}
					>
						<h3>Çalışdığınız müəssisənin adını qeyd edin.*</h3>
						<input type="text" placeholder="QSS Analytics" value={value} onChange={(e)=>handleChange(e)}/>
						<h3>Vəzifənizi qeyd edin.*</h3>
						<input type="text" placeholder="Product Manager" value={valuePositon} onChange={(e)=>handlePositionChange(e)}/>
						<div className="form-contents-yes_questions_checkboxs">
							<div onClick={() => handleOpenOptions()}>
								<label for="labour">Əmək fəaliyyəti forması:</label>
								<div className="form-contents-yes_questions_checkboxs_left">
									<div className="choose">
										<span className={`span ${clickedText ? "spann" : ""}`}>
											{clickedText ? clickedText : "Seçin ..."}
										</span>
										<i
											className={`fa-solid fa-sort-down ${down ? "down" : ""}`}
										></i>
										<i
											className={`fa-solid fa-sort-up ${down ? "up" : ""}`}
										></i>
									</div>
								</div>
							</div>
							<div onClick={() => handleOpenOptionsDegree()}>
								<label for="labour">Peşəkarlıq dərəcəsi:</label>
								<div className="form-contents-yes_questions_checkboxs_left">
									<div className="choose">
										<span
											className={`span ${clickedTextDegree ? "spann" : ""}`}
										>
											{clickedTextDegree ? clickedTextDegree : "Seçin ..."}
										</span>
										<i
											className={`fa-solid fa-sort-down ${
												downDegree ? "down" : ""
											}`}
										></i>
										<i
											className={`fa-solid fa-sort-up ${
												downDegree ? "up" : ""
											}`}
										></i>
									</div>
								</div>
							</div>
						</div>
						<div className="all-choices">
							<div className={`choices ${openOptions ? "open" : ""}`}>
								{labour?.map((item) => (
									<div
										className="choice"
										onClick={(e) => handleChooseOption(e)}
									>
										<span>{item.name}</span>
										<div
											className={`circle ${chooseOption ? "circle-click" : ""}`}
										></div>
									</div>
								))}
							</div>
							<div className={`choices degree ${openOptionsDegree ? "open" : ""}`}>
								{degree?.map((item) => (
									<div
										className="choice"
										onClick={(e) => handleChooseOptionDegree(e)}
									>
										<span>{item.name}</span>
										<div
											className={`circle ${chooseOption ? "circle-click" : ""}`}
										></div>
									</div>
								))}
							</div>
						</div>
						<div className="dates">
							<div className="dates-start">
								<label>İşə başlama tarixi:</label>
								<br />
								<input type="date" name="" id="" value={dateStart} onChange={(e)=>handleChangeDateStart(e)}/>
							</div>
							<div className="dates-end">
								<label for="end">İşdən ayrılma tarixi:</label>
								<br />
								<input type="date" name="" id="end" disabled={inputDisabled} className={`${inputDisabled ? "disable" : ""}`}value={dateEnd} onChange={(e)=>handleChangeDateEnd(e)} />
							</div>
						</div>
						<div className="working" onClick={()=>handleDisable()}>
							<h3>Hal hazırda çalışıram</h3>
							<input type="checkbox"/>
						</div>
						<div className="save">
                          <button className="save-button">Yadda saxla <i class="fa-solid fa-check"></i></button>
						</div>
					</div>
				</div>
			</div>
			<div className="form-buttons">
				<button className="back">
					<i class="fa-solid fa-arrow-left"></i> Geri
				</button>
				<button className="next" onClick={() => handleNext()}>
					Növbəti{" "}
					<i
						class="fa-solid fa-arrow-right"
						style={{ color: "#ffffff", marginLeft: 10 }}
					></i>
				</button>
			</div>
		</div>
	);
};

export default Form;
