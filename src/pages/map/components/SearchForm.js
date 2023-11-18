import React, { useState } from 'react';
import Map from './Map';
import styles from '../css/SearchForm.module.css';
import { RxMagnifyingGlass } from "react-icons/rx";
import { useSelector } from 'react-redux';
import Report from '../../components/Report';

const SearchForm = () => {

  let showReport = useSelector(state => state.show.reportshow);

  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState("");
  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState("");


  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e) => {
    e.preventDefault();
    setKeyword(Value);
  };

  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (Value === "") {
      alert("검색어를 입력해주세요.");
    }
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // 약국 버튼 클릭 시
  const handlePharmacySearch = () => {
    handleButtonClick('약국');
    setKeyword("약국");
  };

  // 병원 버튼 클릭 시
  const handleHospitalSearch = () => {
    handleButtonClick('병원');
    setKeyword("병원");
  };

  const handleShelterSearch = () => {
    handleButtonClick('대피소');
    setKeyword("대피소");
  };

  const handleCoolingSearch = () => {
    handleButtonClick('무더위쉼터');
    setKeyword("무더위쉼터");
  };

  const handlePoliceSearch = () => {
    handleButtonClick('경찰서');
    setKeyword("경찰서");
  };

  return (
    <div className={styles.landingpage}>
      <div className={styles.search_categories}>
        <div className={styles.searchform_container}>
          <form className={styles.search_form} onSubmit={submitKeyword}>
            <label htmlFor="place" className="form_label">
              <input
                type="text"
                id="movie-title"
                className={styles.form_input}
                name="place"
                onChange={keywordChange}
                placeholder="예) 지진대피소"
                required
              />
              <button
                className={styles.btn_search}
                type="submit"
                onClick={valueChecker}>
                <RxMagnifyingGlass size={26} />
              </button>
            </label>
          </form>
        </div>
        <div className={styles.button_list}>
          <button
            className={`${styles.btn_categories} ${selectedButton === '대피소' ? styles.selected : ''}`}
            onClick={handleShelterSearch}
          >
            대피소
          </button>
          <button
            className={`${styles.btn_categories} ${selectedButton === '무더위쉼터' ? styles.selected : ''}`}
            onClick={handleCoolingSearch}
          >
            무더위쉼터
          </button>
          <button
            className={`${styles.btn_categories} ${selectedButton === '병원' ? styles.selected : ''}`}
            onClick={handleHospitalSearch}
          >
            병원
          </button>
          <button
            className={`${styles.btn_categories} ${selectedButton === '경찰서' ? styles.selected : ''}`}
            onClick={handlePoliceSearch}
          >
            경찰서
          </button>
          <button
            className={`${styles.btn_categories} ${selectedButton === '약국' ? styles.selected : ''}`}
            onClick={handlePharmacySearch}
          >
            약국
          </button>
        </div>
      </div>
      <Map searchKeyword={Keyword} /> {/* 제출한 검색어 넘기기 */}
      {showReport ? <Report /> : undefined}
    </div>
  );
};

export default SearchForm;
