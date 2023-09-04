import React, { useEffect, useState } from "react";
import "./Form.scss";
import { addFormSchema } from "../../schema/FormSchema";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import * as yup from "yup";

const Form = ({alert,setAlert,handleOpenAlert}) => {
	const [noChecked, setNoChecked] = useState(false);
	const [noValidation, setNoValidation] = useState(false);
	const [yesChecked, setYesChecked] = useState(false);
	const [yesValidation, setYesValidation] = useState(false);
	const [sixth, setSixth] = useState(false);
	const [fourth, setFourth] = useState(false);
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
	const [secondPart, setSecondPart] = useState(false);
	const [lookList, setLookList] = useState(false);
	// const [alert, setAlert] = useState(false);
	const [body, setBody] = useState(false);
	const [finish, setFinish] = useState(false);
	const [program, setProgram] = useState(false);
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
	});
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState("");
	const [valuePositon, setValuePosition] = useState("");
	const [dateStart, setDateStart] = useState("");
	const [dateEnd, setDateEnd] = useState("");
	const [id, setId] = useState(null);
	let [editedItemIndex, setEditedItemIndex] = useState(-1);
	let [yesValue, setYesValue] = useState("");
	let [noValue, setNoValue] = useState("");
	let [error, setError] = useState({});
	console.log(editedItemIndex);

	const handleNoClick = (e) => {
		setNoChecked(true);
		setYesChecked(false);
		
		setNoValue(e.target.textContent)
		setNoValidation(false)
		setYesValidation(false)
		setErrorss({})
	};
	
	const handleYesClick = (e) => {
		
		setYesChecked(true);
		setNoChecked(false);
		setYesValue(e.target.textContent)
		setYesValidation(false)
		setNoValidation(false)
		setErrorss({})
	};
	console.log(yesValue);
	const [errorss, setErrorss] = useState({});
	const handleNext = () => {
		if(yesChecked){
			if(state.company==="" || state.labour===""){
               console.log("req");
			   setError({ company: 'company is required'})
			   return;
			}
			console.log('Veriler işlendi');
			setError({});
			setSixth(true)
			setFirstPart(false)
			setFinish(true)
			setProgram(true)
			setLookList(true)
		}
		else if(noChecked){
			setSixth(true)
			setFirstPart(false)
			setFinish(true)
			setProgram(true)
			setLookList(true)
		}else{
			setErrorss({ general: 'fdf'})
			console.log("erraaa");
			return;
		}
		setErrorss({})
		
			
		
	};
	const handleBack = () => {
		setProgram(false);
		setLookList(true);
		// if (noChecked) {
		setFirstPart(true);
		setYesChecked(false)
		setLookList(true);
		console.log("5");
		setSixth(false);
		setFinish(false)
		setLookList(false)
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
		console.log(state.company);
		const newItem = { ...state, id: uuidv4() };

		// setArr((prevArr)=>{
		// 	return prevArr.push(newItem)
		// })
		setArr([...arr, newItem]);
		console.log(arr);
		setState({
			company: "",
			position: "",
			labour: "",
			degree: "",
			dateStart: "",
			dateEnd: "",
		});
		setClickedTextDegree(""); // Clear clickedTextDegree
  setClickedText(""); // Clear clickedText
		console.log("a");
		setFirstPart(false);
		setSecondPart(true)
	};
	console.log("company value",state.dateEnd);
	useEffect(()=>{
		console.log("render");
		setState({
			company: "",
					position: "",
					labour: "",
					degree: "",
					dateStart: "",
					dateEnd: "",
		})
		setClickedTextDegree(""); // Clear clickedTextDegree
		  setClickedText(""); // Clear clickedText
		 
     
	   console.log(state.dateEnd);
		//   if(id){
		// 	setState(state)
		// 	setState({
		// 		company: "",
		// 				position: "",
		// 				labour: "",
		// 				degree: "",
		// 				dateStart: "",
		// 				dateEnd: "",
		// 	})
		// 	setClickedTextDegree(""); // Clear clickedTextDegree
		//   setClickedText(""); // Clear clickedText
		//   }
		console.log(id);
		if(firstPart){
			// if(state.dateEnd){
				setInputDisabled(false)
			// }
			
		}
		},[secondPart,id])
  
	const saveEditData = () => {
		if (editedItemIndex !== -1) {
			const updatedArr = [...arr];
			updatedArr[editedItemIndex] = {
				...state,
				id: id,
			};
			setArr(updatedArr);
		}

		setState({
			company: "",
			position: "",
			labour: "",
			degree: "",
			dateStart: "",
			dateEnd: "",
		});
		setId(null);
		setEditedItemIndex(-1);
		setFirstPart(false);
		setSecondPart(true)
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
	const [editedItem,setEditedItem]=useState([])
	const handleEditClick = (data) => {
		console.log(data);
		const editedItem = arr.find((item) => item.id === data.id);
		setState({
			company: editedItem.company,
			position: editedItem.position,
			labour: editedItem.labour,
			degree: editedItem.degree,
			dateStart: editedItem.dateStart,
			dateEnd: editedItem.dateEnd,
		});
		setId(data.id);
		const editedItemIndex = arr.findIndex((item) => item.id === data.id);
		setEditedItemIndex(editedItemIndex);
		setFirstPart(true);
		setSecondPart(false)
		setEditedItem(editedItem);
		console.log(editedItem);
	};
	console.log(state);
	console.log(id);
	useEffect(()=>{
		console.log("edit");
		setState(editedItem)
		setState({
			company: editedItem.company,
					position: editedItem.position,
					labour: editedItem.labour,
					degree: editedItem.degree,
					dateStart: editedItem.dateStart,
					dateEnd: editedItem.dateEnd,
		})
		setClickedTextDegree(editedItem.degree); // Clear clickedTextDegree
		  setClickedText(editedItem.labour); // Clear clickedText
		},[editedItem])
		
	const handleDelete = (id) => {
		const updatedArr = arr.filter((item) => item.id !== id);
		setArr(updatedArr);
		if (arr.length == 1) {
			setFirstPart(true);
			setSecondPart(false)
			setYesChecked(false);
			setLookList(false)
		}
		setAlert(false);
	};
	const handleNoDelete = () => {
		setAlert(false);
	};
	const handleAddJob = () => {
		setFirstPart(true);
		setLookList(true);
		setSecondPart(false)
		
		
	};
	
	const handleLookLists = () => {
		setFirstPart(false);
		setSecondPart(true)
	};
	console.log(yesValue);
	return (
		<div className={`${body ? "body-disable" : ""}`}>
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
						<div
							className={`form-sections_title ${
								fourth ? "experience" : "no-experience"
							}`}
						>
							<span className="six">4</span>
							<h3>Idman</h3>
						</div>
						<div className={`experience ${sixth ? "no-experience" : ""}`}>
							<span>5</span>
							<h3>İş təcrübəsi</h3>
						</div>
						<div
							className={`form-sections_title ${
								sixth ? "experience" : "no-experience"
							}`}
						>
							<span className="six">6</span>
							<h3>Proqram bilikləri</h3>
						</div>
					</div>
					<div className="form-contents">
						{!finish && (
							<div className="form-contents_title">
								<h2>İş təcrübəsi</h2>
								<div className="form-contents_section-count">
									<span>1</span>
								</div>
							</div>
						)}
						{firstPart && (
							<div className="form-contents_firstpart">
								{!lookList && (
									<>
										<div className="form-contents_questions">
											<h3>İş təcrübəniz var?</h3>
										</div>
										<div className="form-contents_answers">
											<div  className={`yes ${error ? 'has-error' : ''}`}   value={yesChecked} onClick={(e) => handleYesClick(e)} {...register("yes")} style={{
															border: errorss.general ? '1px solid red' : '',
															borderRadius:errors.general ? '20px' : ''
														  }}>
												<span style={{ color: yesChecked ? "#038477" : "" }}>
													Bəli
												</span>
												<div
													className={`checkbox ${yesChecked ? "active" : ""}`}
												></div>
											</div>
											{yesValidation && (
												<p style={{color:"red"}}>ffd</p>
											)}
											<div   className={`no ${error ? 'has-error' : ''}`}  value={noChecked} onClick={(e) => handleNoClick(e)} {...register("no")} style={{
															border: errorss.general ? '1px solid red' : '',
															borderRadius:errors.general ? '20px' : ''
														  }}>
												<span style={{ color: noChecked ? "#038477" : "" }}>
													Xeyr
												</span>
												<div
													className={`checkbox ${noChecked ? "active" : ""}`}
												></div>
											</div>
											{noValidation && (
												<p style={{color:"red"}}>ffd</p>
											)}
										</div>
									</>
								)}
								<div
									className={`form-contents-yes_questions ${
										yesChecked ? "yes-questions" : ""
									}`}
								>
									<form >
									<h3>Çalışdığınız müəssisənin adını qeyd edin.*</h3>
									<input
										type="text"
										placeholder="QSS Analytics"
										{...register("company")}
										value={state.company}
										name="company"
										onChange={(e) => handleChange(e)}
										autocomplete="off"
										style={{
											borderColor: error.company ? 'red' : '',
										  }}
									/>
									<h3>Vəzifənizi qeyd edin.*</h3>
									<input
										type="text"
										placeholder="Product Manager"
										{...register("position")}
										value={state.position}
										name="position"
										onChange={(e) => handleChange(e)}
										autocomplete="off"
										style={{
											borderColor: error.company ? 'red' : '',
										  }}
									/>
									<div className="form-contents-yes_questions_checkboxs">
										<div onClick={() => handleOpenOptions()}>
											<label for="labour">Əmək fəaliyyəti forması:</label>
											<div className="form-contents-yes_questions_checkboxs_left">
												<div className="choose" style={{
															border: error.company ? '1px solid red' : '',
															borderRadius:error.company ? '20px' : ''
														  }}>
													<span
														className={`span ${clickedText ? "spann" : ""}`}
														{...register("labour")}
														value={clickedText}
														name="labour"
														onChange={(e) => handleChange(e)}
													>
														{clickedText ? clickedText : "Seçin ..."}
													</span>
													<i
														className={`fa-solid fa-sort-down ${
															down ? "down" : ""
														}`}
													></i>
													<i
														className={`fa-solid fa-sort-up ${
															down ? "up" : ""
														}`}
													></i>
												</div>
											</div>
										</div>
										<div onClick={() => handleOpenOptionsDegree()}>
											<label for="degree">Peşəkarlıq dərəcəsi:</label>
											<div className="form-contents-yes_questions_checkboxs_left">
												<div className="choose" style={{
															border: error.company ? '1px solid red' : '',
															borderRadius:error.company ? '20px' : ''
														  }}>
													<span
														className={`span ${
															clickedTextDegree ? "spann" : ""
														}`}
														{...register("degree")}
														value={clickedTextDegree}
														name="degree"
														onChange={(e) => handleChange(e)}
													>
														{clickedTextDegree
															? clickedTextDegree
															: "Seçin ..."}
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
												id="start"
												{...register("dateStart")}
												value={state.dateStart}
												name="dateStart"
												onChange={(e) => handleChange(e)}
												style={{
													borderColor: error.company ? 'red' : '',
												  }}
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
												style={{
													borderColor: inputDisabled ? 'gray' : error.company ? "red" : ""
												  }}
											/>
										</div>
									</div>
									<div className="working" onClick={() => handleDisable()}>
										<h3>Hal hazırda çalışıram</h3>
										<input type="checkbox"/>
									</div>
									<div className="save">
										{id === null ? (
											<button className="save-button" onClick={() => addData()}>
												Yadda saxla <i class="fa-solid fa-check"></i>
											</button>
										) : (
											<button
												className="save-button"
												onClick={() => saveEditData()}
											>
												Yadda saxla <i class="fa-solid fa-check"></i>
											</button>
										)}
									</div>
									{lookList && (
										<div className="look-at-list">
											<button
												className="look-list-button"
												onClick={() => handleLookLists()}
											>
												Siyahıya bax
											</button>
										</div>
									)}
									</form>
								</div>
							</div>
						)}
						{secondPart && (
							<div className="form-contents_secondpart">
								<div className="form-contents_secondpart-lists">
									{arr?.map((item, index) => (
										<div className="list" key={item.id}>
											<div>
												<span>{index + 1}.</span>
												<p className="list-companyName">
													{item.company},{item.position}
												</p>
											</div>
											<div className="line"></div>
											<div className="date">
												{item.dateStart &&
													moment(item.dateStart).format("MM/YYYY")}
												{item.dateEnd &&
													"-" + moment(item.dateEnd).format("MM/YYYY")}
												{/* {item.dateEnd && ""} */}
												{!item.dateEnd && "-Currently working"}
											</div>
											<div className="line"></div>
											<i
												class="fa-solid fa-pencil"
												onClick={() => handleEditClick(item)}
											></i>
											<i
												class="fa-regular fa-circle-xmark"
												onClick={() => handleOpenAlert(item.id)}
											></i>
											{alert && (
												<div className="alert" onClick={(e) => e.stopPropagation()}>
													<i
														class="fa-solid fa-circle-xmark"
														onClick={() => handleNoDelete()}
													></i>
													<h4>Bu məlumatı silmək istədiyinizə əminsinizmi?</h4>
													<div className="alert-btns">
														<button
															className="alert-btns_yes"
															onClick={() => handleDelete(item.id)}
														>
															Bəli
														</button>
														<button
															className="alert-btns_no"
															onClick={() => handleNoDelete()}
														>
															Xeyr
														</button>
													</div>
												</div>
											)}
										</div>
									))}
								</div>
								<button className="add" onClick={() => handleAddJob()}>
									Yeni iş yeri əlavə et +
								</button>
							</div>
						)}
						{program && (
						<h3 style={{color:"#038477",marginTop:25,marginLeft:15}}>Proqram bilikləri substage</h3>
					)}
					</div>
					
				</div>
				<div className="form-buttons">
					<button className="back" onClick={() => handleBack()}>
						<i class="fa-solid fa-arrow-left"></i> Geri
					</button>
					<button className="next" type="submit" onClick={()=>handleNext()}>
						Növbəti{" "}
						<i
							class="fa-solid fa-arrow-right"
							style={{ color: "#ffffff", marginLeft: 10 }}
						></i>
					</button>
				</div>
				<div style={{ height: 20 }}></div>
			</div>
		</div>
	);
};

export default Form;
