sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},

			/**
			 * Compared two dates. If date 1 is equal or lower than date 2, we retrun a Error text
			 * @public
			 * @param {Date} oDate1 Required date
			 * @param {Date} oDate2 Actual date to compare
			 * @returns {sap.ui.core.ValueState}
			 */
			 shippingStatusState : function(oDate1,oDate2){

				 if (oDate1 instanceof Date && oDate2 instanceof Date){
					 if (oDate1.getTime() > oDate2.getTime()){
						 return sap.ui.core.ValueState.None;
					 } else {
						 return sap.ui.core.ValueState.Error;
					 }
				 } else {
					 return sap.ui.core.ValueState.None;
				 }
			 },
			 shippingStatusText : function(oDate1,oDate2){

				 if (oDate1 instanceof Date && oDate2 instanceof Date){
					 if (oDate1.getTime() > oDate2.getTime()){
						 return "In Time";
					 } else {
						 return "Overdue";
					 }
				 } else {
					 return "NA";
				 }
			 }

		};

	}
);
