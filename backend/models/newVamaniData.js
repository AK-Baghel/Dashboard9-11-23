import mongoose from "mongoose";

const vamaniSchema = new mongoose.Schema({
    comp_id: {
        type: Number,
    },
    comp_emp_name: {
        type: String,
    },
    comp_emp_gender: {
        type: Number,
    },
    comp_emp_card: {
        type: Number,
    },
    comp_emp_phone: {
        type: Number,
    },
    comp_emp_mail: {
        type: String,
    },
    comp_emp_unit: {
        type: Number,
    },
    comp_emp_des: {
        type: Number,
    },
    comp_emp_mail_1: {
        type: String,
    },
    comp_emp_category: {
        type: Number,
    },
    comp_emp_issue: {
        type: String,
    },
    comp_emp_type: {
        type: String,
    },
    comp_emp_no: {
        type: Number,
    },
    comp_post_date: {
        type: Date,
    },
    comp_post_time: {
        type: String,
    },
    comp_update_date: {
        type: Date,
    },
    comp_update_time: {
        type: String,
    },
    comp_resolve_day: {
        type: Number,
    },
    comp_post_by: {
        type: Number,
    },
    comp_status: {
        type: Number,
    },
    comp_reason: {
        type: String,
    },
    comp_close: {
        type: String,
    },
    comp_status_final1: {
        type: String,
    },
    comp_remark: {
        type: String,
    }
});

export default mongoose.model("newVamaniData", vamaniSchema);