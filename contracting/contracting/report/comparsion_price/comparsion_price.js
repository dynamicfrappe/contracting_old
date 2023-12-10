// Copyright (c) 2023, Dynamic Technology and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Comparsion Price"] = {
	"filters": [
			{
				fieldname: "from_date",
				label: __("From Date"),
				fieldtype: "Date",
				default: frappe.datetime.get_today(),
				reqd: 1
			},
			{
				fieldname: "to_date",
				label: __("To Date"),
				fieldtype: "Date",
				default: frappe.datetime.add_days(frappe.datetime.get_today(),1),
				// reqd: 1
			},
	]
};