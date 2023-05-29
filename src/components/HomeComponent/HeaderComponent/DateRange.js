import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import React, { useState, useRef, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./DateRange.css";

const Date_Range = () => {
  // dùng thư viện onClickOutside của react
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  function listenForOutsideClicks(listening, setListening, menuRef, setIsOpen) {
    return () => {
      if (listening) return;
      if (!menuRef.current) return;
      setListening(true);
      [`click`, `touchstart`].forEach((type) => {
        // ẩn khi nhấn bên ngoài
        document.addEventListener(`click`, (evt) => {
          if (menuRef.current.contains(evt.target)) return;
          setIsOpen(false);
        });
      });
    };
  }

  useEffect(
    listenForOutsideClicks(listening, setListening, menuRef, setIsOpen)
  );

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // ẩn khi nhấn Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen === true) {
      setIsOpen(false);
    }
  });

  return (
    <div ref={menuRef} className={`date_range_input`}>
      <input
        value={`${format(state[0].startDate, "dd-MM-yyyy")} to ${format(
          state[0].endDate,
          "dd-MM-yyyy"
        )}`}
        readOnly
        //bắt sự kiện click vào input để mở
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="date_range">
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className={` ${isOpen ? "open" : "hidden"}`}
            minDate={new Date()}
            onChange={(item) => setState([item.selection])}
            ranges={state}
            direction="horizontal"
            months={2}
          />
        </div>
      )}
    </div>
  );
};

export default Date_Range;
