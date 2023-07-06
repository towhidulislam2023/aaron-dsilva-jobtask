import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Swal from "sweetalert2";

const AddUserInfo = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    address: Yup.string().required("address is required"),
    country: Yup.string().required("Country is required"),
    gender: Yup.string().required("Gender is required"),
    hobbies: Yup.array().min(1, "Select at least one hobby"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      address: "",
      country: "",
      gender: "",
      hobbies: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        title: 'Form Values',
        html: `
          <strong>Username:</strong> ${values.username}<br>
          <strong>Address:</strong> ${values.address}<br>
          <strong>Country:</strong> ${values.country}<br>
          <strong>Gender:</strong> ${values.gender}<br>
          <strong>Hobbies:</strong> ${values.hobbies.join(', ')}
        `,
        icon: 'info',
        confirmButtonText: 'OK',
      });
      formik.resetForm();
    },

  });

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Input User Name"
          variant="outlined"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          sx={{ mt: 2 }}
          fullWidth
          id="address"
          name="address"
          multiline
          rows={4}
          label="User's address"
          variant="outlined"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="country-label">Country of Residence</InputLabel>
          <Select
            labelId="country-label"
            id="country-select"
            value={formik.values.country}
            onChange={formik.handleChange}
            name="country"
            label="Country of Residence"
            variant="outlined"
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <MenuItem value="">Select a country</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="usa">United States</MenuItem>
            <MenuItem value="uk">United Kingdom</MenuItem>
            <MenuItem value="canada">Canada</MenuItem>
          </Select>
          {formik.touched.country && formik.errors.country && (
            <FormHelperText sx={{ color: "red" }}>
              {formik.errors.country}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }} component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={
              formik.touched.gender && formik.errors.gender ? "true" : "false"
            }
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          {formik.touched.gender && formik.errors.gender && (
            <FormHelperText sx={{ color: "red" }}>
              {formik.errors.gender}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
          <Select
            labelId="hobbies-label"
            id="hobbies-select"
            multiple
            value={formik.values.hobbies}
            onChange={formik.handleChange}
            name="hobbies"
            label="Hobbies/Interests"
            variant="outlined"
            error={
              formik.touched.hobbies && Boolean(formik.errors.hobbies)
                ? true
                : false
            }
          >
            <MenuItem value="reading">Reading</MenuItem>
            <MenuItem value="cooking">Cooking</MenuItem>
            <MenuItem value="painting">Painting</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
          </Select>
          {formik.touched.hobbies && formik.errors.hobbies && (
            <FormHelperText sx={{ color: "red" }}>
              {formik.errors.hobbies}
            </FormHelperText>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default AddUserInfo;
