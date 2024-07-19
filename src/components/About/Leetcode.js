import React from "react";
import LeetCodeCalendar from 'leetcode-calendar';
import { Row } from "react-bootstrap";

export default function LeetCode() {
  const exampleTheme = {
    light: [
      'rgba(255, 255, 255, .92)',
      'rgba(255, 145, 16, 0.44)',
      'rgba(255, 145, 16, 0.6)',
      'rgba(255, 145, 16, 0.76)',
      'rgba(255, 145, 16, 0.92)',
    ],
    dark: [
      'rgba(255, 255, 255, .92)',
      'rgba(255, 145, 16, 0.44)',
      'rgba(255, 145, 16, 0.6)',
      'rgba(255, 145, 16, 0.76)',
      'rgba(255, 145, 16, 0.92)',
    ],
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", width: "100% ", textAlign: "left" }}>
        <strong className="purple">LeetCode</strong>
      </h1>
      <LeetCodeCalendar 
        className="leetcode-block"
        username='Prasheel_code' // Replace with your LeetCode username
        blockSize={15} // Optional: Size of each block in pixels (default: 15)
        blockMargin={5} // Optional: Margin between blocks in pixels (default: 5)
        fontSize={16} // Optional: Font size of the text within blocks (default: 16)
        theme={exampleTheme} // Optional: A custom theme object to style the calendar
        style={{ maxWidth: '100%', overflowX: 'hidden'}} // Optional: Inline styles for the calendar container
      />
    </Row>
  )
}

