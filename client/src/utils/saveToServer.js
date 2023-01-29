import axios from "axios";
export const saveToServer = (reg_mail, role, uri, payload) => {
  if (reg_mail !== undefined && role !== undefined && uri !== undefined) {
    axios.post(`http://localhost:5000/api-v1/${uri}`, { reg_mail, role });
  } else if (uri !== undefined && payload !== undefined) {
    axios.post(`http://localhost:5000/api-v1/${uri}`, payload);
  }
};
