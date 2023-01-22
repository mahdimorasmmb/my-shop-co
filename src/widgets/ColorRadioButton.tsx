import React from "react";

type Props = {
  title?: string;
  listItems: Array<Color>;
};

const ColorRadioButton = ({ listItems, title }: Props) => {
  return (
    <div className="">
      <p className="mb-4">انتخاب رنگ مورد نظر </p>
      <div className="flex">
        {listItems.map((color) => (
          <div key={color.color_id.id}>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" value={color.color_id.id} name="color" className="absolute opacity-0 h-0 w-0 peer" />
              <span className="w-8 h-8 peer-checked:shadow-[0_0_0_2px_rgba(204,204,204)] rounded-2xl mr-2 border-white border-2" style={{background:color.color_id.code_color}}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorRadioButton;
