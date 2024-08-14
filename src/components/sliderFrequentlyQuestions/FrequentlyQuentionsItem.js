import "./SliderFrequentlyQuestions.scss";
const FrequentlyQuestionsItem = (props) => {
  return (
    <>
      <li className="faq-item">
        <div className="faq-item-question">{props.question}</div>
        <div className="faq-item-answer">{props.answer}</div>
      </li>
    </>
  );
};

export default FrequentlyQuestionsItem;
