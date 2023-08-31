import React, { useState } from "react";
import "./Form.scss";
import { addFormSchema } from "../../schema/FormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const Form = () => {
	const [noChecked, setNoChecked] = useState(false);
	const [yesChecked, setYesChecked] = useState(false);
	const [sixth, setSixth] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [openOptionsDegree, setOpenOptionsDegree] = useState(false);
	const [chooseOption, setChooseOption] = useState(false);
	const [chooseOptionDegree, setChooseOptionDegree] = useState(false);
	let [clickedText, setClickedText] = useState("");
	let [clickedTextDegree, setClickedTextDegree] = useState("");
	const [down, setDown] = useState(false);
	const [inputDisabled, setInputDisabled] = useState(false);
	const [downDegree, setDownDegree] = useState(false);
	const [firstPart, setFirstPart] = useState(true);
	const [lookList, setLookList] = useState(false);
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
	const [state, setState] = useState({
		company: "",
		position: "",
		labour: "",
		degree: "",
		dateStart: null,
		dateEnd: null,
		id:uuidv4()
	});
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState("");
	const [valuePositon, setValuePosition] = useState("");
	const [dateStart, setDateStart] = useState("");
	const [dateEnd, setDateEnd] = useState("");
	const [id, setId] = useState(undefined);

    const formattedDate = moment(dateStart).format("MM/YYYY");
    const formattedDate1 = moment(dateEnd).format("MM/YYYY");

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
	const handleDisable = () => {
		setInputDisabled(!inputDisabled);
	};
	//values
	const handleChange = (e) => {
		e.preventDefault();
		//  setValue(e.target.value)
		const spanContent = e.target.textContent;
		setClickedText(spanContent);
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const handleSpanClick = (e) => {
		setChooseOption(true);
		const spanContent = e.target.textContent;
		setClickedText(spanContent);
		setOpenOptions(false);
		const { name, textContent } = e.target;

		setState({ ...state, labour: e.target.textContent });
	};
	const handleSpanDegreeClick = (e) => {
		setChooseOptionDegree(true);
		const spanContent = e.target.textContent;
		setClickedTextDegree(spanContent);
		setOpenOptionsDegree(false);

		setState({ ...state, degree: e.target.textContent });
	};

	const addData = () => {
		console.log(state);
		arr.push(state);
		setState({
			company: "",
			position: "",
			labour: "",
			degree: "",
			dateStart: "",
			dateEnd: "",
		});
		clickedTextDegree = "";
		clickedText = "";
		console.log("a");
		setFirstPart(false);
	};
	console.log(arr);
	const handlePositionChange = (e) => {
		setValuePosition(e.target.value);
	};
	console.log(valuePositon);
	const handleChangeDateStart = (e) => {
		setDateStart(e.target.value);
	};
	console.log(dateStart);
	const handleChangeDateEnd = (e) => {
		setDateStart(e.target.value);
	};
	console.log(dateEnd);
	const handleButtonClick = () => {
		handleSubmit(addData)();
		console.log("bb");
	};
	// react hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(addFormSchema) });
	//update
	const handleEditClick = (data) => {
		setState({
			company: data.company,
			position: data.position,
			labour: data.labour,
			degree: data.degree,
			dateStart: data.dateStart,
			dateEnd: data.dateEnd,
		});
		setId(data.id);
	};
	const handleAddJob =()=>{
		setFirstPart(true)
		setLookList(true)
	}
	const handleLookLists=()=>{
		setFirstPart(false)
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
					{firstPart && (
						<div className="form-contents_firstpart">
							{!lookList && (
								<>
								<div className="form-contents_questions">
								<h3>İş təcrübəniz var?</h3>
							</div>
							<div className="form-contents_answers">
								<div className="yes" onClick={() => handleYesClick()}>
									<span style={{ color: yesChecked ? "#038477" : "" }}>
										Bəli
									</span>
									<div
										className={`checkbox ${yesChecked ? "active" : ""}`}
									></div>
								</div>
								<div className="no" onClick={() => handleNoClick()}>
									<span style={{ color: noChecked ? "#038477" : "" }}>
										Xeyr
									</span>
									<div
										className={`checkbox ${noChecked ? "active" : ""}`}
									></div>
								</div>
							</div>
								</>
							)}
							<div
								className={`form-contents-yes_questions ${
									yesChecked ? "yes-questions" : ""
								}`}
							>
								<h3>Çalışdığınız müəssisənin adını qeyd edin.*</h3>
								<input
									type="text"
									placeholder="QSS Analytics"
									{...register("company")}
									value={state.company}
									name="company"
									onChange={(e) => handleChange(e)}
								/>
								<h3>Vəzifənizi qeyd edin.*</h3>
								<input
									type="text"
									placeholder="Product Manager"
									{...register("position")}
									value={state.position}
									name="position"
									onChange={(e) => handleChange(e)}
								/>
								<div className="form-contents-yes_questions_checkboxs">
									<div onClick={() => handleOpenOptions()}>
										<label for="labour">Əmək fəaliyyəti forması:</label>
										<div className="form-contents-yes_questions_checkboxs_left">
											<div className="choose">
												<span
													className={`span ${clickedText ? "spann" : ""}`}
													{...register("labour")}
												>
													{clickedText ? clickedText : "Seçin ..."}
												</span>
												<i
													className={`fa-solid fa-sort-down ${
														down ? "down" : ""
													}`}
												></i>
												<i
													className={`fa-solid fa-sort-up ${down ? "up" : ""}`}
												></i>
											</div>
										</div>
									</div>
									<div onClick={() => handleOpenOptionsDegree()}>
										<label for="degree">Peşəkarlıq dərəcəsi:</label>
										<div className="form-contents-yes_questions_checkboxs_left">
											<div className="choose">
												<span
													className={`span ${clickedTextDegree ? "spann" : ""}`}
													{...register("degree")}
													value={clickedTextDegree}
													name="degree"
													onChange={(e) => handleChange(e)}
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
												{...register("labour")}
												value={clickedText}
												name="labour"
												onClick={handleSpanClick}
											>
												<span>{item.name}</span>
												<div
													className={`circle ${
														chooseOption ? "circle-click" : ""
													}`}
												></div>
											</div>
										))}
									</div>

									<div
										className={`choices degree ${
											openOptionsDegree ? "open" : ""
										}`}
									>
										{degree?.map((item) => (
											<div
												className="choice"
												{...register("degree")}
												value={clickedTextDegree}
												name="degree"
												onClick={handleSpanDegreeClick}
											>
												<span>{item.name}</span>
												<div
													className={`circle ${
														chooseOption ? "circle-click" : ""
													}`}
												></div>
											</div>
										))}
									</div>
								</div>
								<div className="dates">
									<div className="dates-start">
										<label>İşə başlama tarixi:</label>
										<br />
										<input
											type="date"
											id=""
											{...register("dateStart")}
											value={state.dateStart}
											name="dateStart"
											onChange={(e) => handleChange(e)}
										/>
									</div>
									<div className="dates-end">
										<label for="end">İşdən ayrılma tarixi:</label>
										<br />
										<input
											type="date"
											id="end"
											disabled={inputDisabled}
											className={`${inputDisabled ? "disable" : ""}`}
											{...register("dateEnd")}
											value={state.dateEnd}
											name="dateEnd"
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</div>
								<div className="working" onClick={() => handleDisable()}>
									<h3>Hal hazırda çalışıram</h3>
									<input type="checkbox" />
								</div>
								<div className="save">
									<button className="save-button" onClick={() => addData()}>
										Yadda saxla <i class="fa-solid fa-check"></i>
									</button>
								</div>
								{lookList && (
									<div className="look-at-list">
									<button className="look-list-button" onClick={()=>handleLookLists()}>Siyahıya bax</button>
								</div>
								)}
							</div>
						</div>
					)}
					{!firstPart &&(
						<div className="form-contents_secondpart">
                         <div className="form-contents_secondpart-lists">
							{arr?.map((item)=>(
                             <div className="list">
                             <div><p className="list-companyName">{item.company},{item.position}</p></div>
							 <div className="line"></div>
							 <div className="date">
							{item.dateStart && moment(item.dateStart).format('MM/YYYY')}-
							{item.dateEnd && moment(item.dateEnd).format('MM/YYYY')}
							{!item.dateEnd && "Currently working"}
							
							 </div>
							 <div className="line"></div>
							 <i class="fa-solid fa-pencil" onClick={() => handleEditClick(item)}></i>
							 <i class="fa-regular fa-circle-xmark"></i>
						   </div>
							))}         
						 </div>
						 <button className="add" onClick={()=>handleAddJob()}>Yeni iş yeri əlavə et +</button>
						</div>
					)}
				</div>
			</div>
			<div className="form-buttons">
				<button className="back">
					<i class="fa-solid fa-arrow-left"></i> Geri
				</button>
				<button className="next" onClick={handleNext}>
					Növbəti{" "}
					<i
						class="fa-solid fa-arrow-right"
						style={{ color: "#ffffff", marginLeft: 10 }}
					></i>
				</button>
			</div>
			<div style={{height:20}}></div>
		</div>
	);
};

export default Form;
