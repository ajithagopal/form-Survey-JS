import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import './App.css';
import React, { useState } from "react";
import {surveyJson} from './components/formConfig';
import { customCss } from './components/formConfig';

const SurveyPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const survey = new Model(surveyJson);
  survey.css = customCss;


const updateActiveElements = (pageIndex) => {
    const progressBarSections = document.querySelectorAll(".progress-bar-section");
    progressBarSections.forEach((section, index) => {
      section.classList.toggle("bg-[#FC8EAC]", index === pageIndex);
      section.classList.toggle("bg-gray-300", index !== pageIndex);
    });

    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach((button, index) => {
      button.classList.toggle("bg-white", index === pageIndex);
      button.classList.toggle("text-black", index === pageIndex);
    });
  };

  survey.onCurrentPageChanged.add((sender) => {
    updateActiveElements(sender.currentPageNo);
  });


  survey.onComplete.add((sender) => {
    setIsCompleted(true); 
    console.log("Survey Results:", JSON.stringify(sender.data, null, 3));
  });

  return (
    <div className="max-w-lg mx-auto px-4">
      {isCompleted ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-600 mb-4">Thank You!</h1>
          <p className="text-gray-600">Your response has been recorded successfully.</p>
        </div>
      ) : (
        <>
          <header className="flex justify-between items-center my-4">
            <img src="logo/bird_2.jpg" alt="Logo" className="w-24 h-24 object-contain" />
            <a href="#" className="text-gray-500 text-sm">
              Help
            </a>
          </header>

          <div className="flex space-x-2 items-center mb-4">
            <div className="progress-bar-section h-1 w-1/3 bg-[#FC8EAC]"></div>
            <div className="progress-bar-section h-1 w-1/3 bg-gray-300"></div>
            <div className="progress-bar-section h-1 w-1/3 bg-gray-300"></div>
          </div>

          <h1 className="text-xl font-medium text-gray-900 text-center mb-6">
            Patient's Personal Information
          </h1>

          <div className="flex justify-between mb-6 bg-gray-200 rounded-[30px] p-2">
            <button
              className="nav-button flex-1 py-2 px-4 text-sm font-medium bg-white rounded-full text-black"
              onClick={() => (survey.currentPageNo = 0)}
            >
              Basic
            </button>
            <button
              className="nav-button flex-1 py-2 px-4 text-sm font-medium rounded-full text-black "
              onClick={() => (survey.currentPageNo = 1)}
            >
              Additional
            </button>
            <button
              className="nav-button flex-1 py-2 px-4 text-sm font-medium rounded-full"
              onClick={() => (survey.currentPageNo = 2)}
            >
              Address
            </button>
          </div>

          <Survey model={survey} />
        </>
      )}
    </div>
  );
};

export default SurveyPage;
