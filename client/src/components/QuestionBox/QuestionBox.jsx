import React, { useState } from 'react';
import './QuestionBox.scss';
import { useRecoilValue } from 'recoil';
import { QuestionsAtom } from '../../Atoms/Atoms';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypereact from 'rehype-react';
import BoxHeader from '../BoxHeader/BoxHeader';

const QuestionBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = useRecoilValue(QuestionsAtom);
  const currentQuestion = questions[currentIndex] || {};
  const limit = questions.length - 1;

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypereact, { createElement: React.createElement });

  const sanitizedHtml = processor.processSync(
    currentQuestion?.description || '',
  ).result;

  const handleClickedRightArrow = () => {
    if (currentIndex < limit) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleClickedLeftArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <BoxHeader
        title={'Question'}
        addArrows={true}
        clickRightArrow={handleClickedRightArrow}
        clickLeftArrow={handleClickedLeftArrow}
      />
      <div className="question-container">
        <h3 className="question-title">{currentQuestion.title}</h3>
        <div className="question-description">
          {sanitizedHtml}
          <br />
          NOTE:
          <br />
          Please log the result of your function execution in the console.
          <br />
          See the example:
          <br />
          const result = myFunction();
          <br />
          console.log(result);
          <br />
          <br />
          This ensures tracking of function outputs for validation purposes.
        </div>
        <div></div>
      </div>
    </>
  );
};

export default QuestionBox;
