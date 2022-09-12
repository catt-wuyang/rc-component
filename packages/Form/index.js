import "./style.scss";
import React, { useState } from "react";
import TextInput from "../TextInput";
import Select from "../Select";
import ToggleNavigation from "../ToggleNavigation";

const FormCollection = function () {
  const [title, setTitle] = useState("");
  const [mainType, setMainType] = useState(0);
  const [subType, setSubType] = useState(0);
  const [subjectTypes, setSubjectType] = useState("");

  const [formData, setFormData] = useState({});

  return (
    <div className="form-collection-comps">
      <form className="form-collection">
        <div className="row">
          <label className="field"></label>
          <div className="col">
            <TextInput name="title" />
          </div>
        </div>

        <div className="row">
          <label className="field"></label>
          <div className="col">
            <Select />
          </div>
        </div>

        <div className="row">
          <label className="field"></label>
          <div className="col">
            <ToggleNavigation name="subjectType" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCollection;
