import React, { useMemo } from "react";

const QuizData = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        question: "1 + 1",
        answers: [
          {
            text: "2",
            correct: true,
            number: "A",
          },
          {
            text: "3",
            correct: false,
            number: "B",
          },
          {
            text: "4",
            correct: false,
            number: "C",
          },
          {
            text: "5",
            correct: false,
            number: "D",
          },
        ],
      },
      {
        id: 2,
        question: "1 + 8",
        answers: [
          {
            text: "2",
            correct: false,
            number: "A",
          },
          {
            text: "3",
            correct: false,
            number: "B",
          },
          {
            text: "4",
            correct: false,
            number: "C",
          },
          {
            text: "9",
            correct: true,
            number: "D",
          },
        ],
      },
      {
        id: 3,
        question: "5 - 2",
        answers: [
          {
            text: "2",
            correct: false,
            number: "A",
          },
          {
            text: "3",
            correct: true,
            number: "B",
          },
          {
            text: "4",
            correct: false,
            number: "C",
          },
          {
            text: "1",
            correct: false,
            number: "D",
          },
        ],
      },
      {
        id: 4,
        question: "10 - 3",
        answers: [
          {
            text: "7",
            correct: true,
            number: "A",
          },
          {
            text: "8",
            correct: false,
            number: "B",
          },
          {
            text: "9",
            correct: false,
            number: "C",
          },
          {
            text: "10",
            correct: false,
            number: "D",
          },
        ],
      },
      {
        id: 5,
        question: "6 + 4",
        answers: [
          {
            text: "9",
            correct: false,
            number: "A",
          },
          {
            text: "10",
            correct: true,
            number: "B",
          },
          {
            text: "11",
            correct: false,
            number: "C",
          },
          {
            text: "12",
            correct: false,
            number: "D",
          },
        ],
      },
      {
        id: 6,
        question: "8 - 5",
        answers: [
          {
            text: "2",
            correct: false,
            number: "A",
          },
          {
            text: "5",
            correct: false,
            number: "B",
          },
          {
            text: "4",
            correct: false,
            number: "C",
          },
          {
            text: "3",
            correct: true,
            number: "D",
          },
        ],
      },
      {
        id: 7,
        question: "2 + 7",
        answers: [
          {
            text: "7",
            correct: false,
            number: "A",
          },
          {
            text: "8",
            correct: false,
            number: "B",
          },
          {
            text: "6",
            correct: false,
            number: "C",
          },
          {
            text: "9",
            correct: true,
            number: "D",
          },
        ],
      },
      {
        id: 8,
        question: "9 - 6",
        answers: [
          {
            text: "1",
            correct: false,
            number: "A",
          },
          {
            text: "2",
            correct: false,
            number: "B",
          },
          {
            text: "4",
            correct: false,
            number: "C",
          },
          {
            text: "3",
            correct: true,
            number: "D",
          },
        ],
      },
      {
        id: 9,
        question: "4 + 3",
        answers: [
          {
            text: "6",
            correct: false,
            number: "A",
          },
          {
            text: "7",
            correct: true,
            number: "B",
          },
          {
            text: "8",
            correct: false,
            number: "C",
          },
          {
            text: "9",
            correct: false,
            number: "D",
          },
        ],
      },
      {
        id: 10,
        question: "10 - 5",
        answers: [
          {
            text: "4",
            correct: false,
            number: "A",
          },
          {
            text: "1",
            correct: false,
            number: "B",
          },
          {
            text: "6",
            correct: false,
            number: "C",
          },
          {
            text: "5",
            correct: true,
            number: "D",
          },
        ],
      },
    ],
    []
  );

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 500" },
        { id: 4, amount: "$ 1.000" },
        { id: 5, amount: "$ 2.000" },
        { id: 6, amount: "$ 5.000" },
        { id: 7, amount: "$ 10.000" },
        { id: 8, amount: "$ 20.000" },
        { id: 9, amount: "$ 50.000" },
        { id: 10, amount: "$ 100.000" },
      ].reverse(),
    []
  );

  return { data, moneyPyramid };
};

export default QuizData;
