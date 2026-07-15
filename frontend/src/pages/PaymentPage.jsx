import React, { useEffect, useState } from "react";
import paymentQR from "../assets/paymentQR.jpeg";

const PaymentPage = () => {
    const amount = localStorage.getItem("donationAmount");

    const [paymentSS, setPaymentSS] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState("");

    const handleUpload = () => {
        if (!paymentSS) {
            alert("Please upload payment screenshot");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            const paymentData = {
                amount,
                screenshot: reader.result,
                status: "Pending",
            };

            localStorage.setItem(
                "paymentProof",
                JSON.stringify(paymentData)
            );

            setPaymentStatus("Pending");
            alert("Payment proof submitted for verification.");
        };

        reader.readAsDataURL(paymentSS);
    };
    useEffect(() => {
        const checkStatus = () => {
            const payment =
                JSON.parse(
                    localStorage.getItem("paymentProof")
                );

            if (payment) {
                setPaymentStatus(
                    payment.status
                );
            }
        };

        checkStatus();

        const interval =
            setInterval(
                checkStatus,
                1000
            );

        return () =>
            clearInterval(interval);

    }, []);
    return (
        <div className="pt-24 flex justify-center p-8 bg-gray-50 min-h-screen">

        <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

            <h1 className="text-3xl font-bold text-center mb-6">
                Scan & Pay
            </h1>

            <img
                src={paymentQR}
                alt="Payment QR"
                className="w-64 h-64 mx-auto"
            />

            <p className="text-center text-2xl font-bold mt-5">
                Please Pay ₹{amount}
            </p>

            <p className="text-center text-gray-500 mt-2">
                Scan this QR using Google Pay,
                PhonePe or Paytm
            </p>

            <input
                type="file"
                accept="image/*"
                className="mt-6 w-full border p-3 rounded-xl"
                onChange={(e) =>
                    setPaymentSS(e.target.files[0])
                }
            />

            <button
                onClick={handleUpload}
                className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
                    Upload Payment Screenshot
            </button>
            {paymentStatus === "Pending" && (
                <div className="mt-5 bg-yellow-100 text-yellow-700 p-3 rounded-xl text-center font-semibold">
                    Payment Verification Pending ⏳
                </div>
            )}

            {paymentStatus === "Approved" && (
                <div className="mt-5 bg-green-100 text-green-700 p-3 rounded-xl text-center font-semibold">
                    Payment Approved Successfully ✅
                </div>
            )}

            {paymentStatus === "Rejected" && (
                <div className="mt-5 bg-red-100 text-red-700 p-3 rounded-xl text-center font-semibold">
                    Payment Rejected ❌
                </div>
            )}
        </div>

        </div>
    );
};

export default PaymentPage;