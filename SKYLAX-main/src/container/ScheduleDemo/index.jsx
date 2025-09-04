import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import rightTopSdh from "../../../public/assets/images/rgt-top-sdh.png"
import calendarImage from "../../../public/assets/images/calendar-wrap-in.png"
import leftArrow from "../../../public/assets/images/left-icon-arrow.svg"
import rightArrow from "../../../public/assets/images/right-icon-arrow.svg"
import userImage from "../../../public/assets/images/user-img.png"
import lftBtmpSdh from "../../../public/assets/images/left-img-sec.png"
import { Select, SelectItem, useDisclosure } from '@heroui/react';
import { apis } from '../../utils/apis';
import { useApi } from '../../hooks/useApi';
import LoginModal from '../../auth/signin';



const ScheduleDemo = () => {
    const router = useRouter();
    const { Post } = useApi();
    const loginModal = useDisclosure();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const industry = [
        { key: "retail_e_commerce", label: "Retail & E-commerce" },
        { key: "food_services", label: "Food services" },
        { key: "manufacturing", label: "Manufacturing" },
        { key: "dealerships", label: "Dealerships" },
    ];

    useEffect(() => {

        const daysContainer = document.getElementById("days");
        const monthYear = document.getElementById("monthYear");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");

        let currentDate = new Date();
        const today = new Date();
        let selectedDates = new Set();
        let currentSelectedDate = '';

        function renderCalendar() {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();

            monthYear.textContent = currentDate.toLocaleString("default", { month: "long" }) + " " + year;

            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();
            const prevLastDate = new Date(year, month, 0).getDate();

            let days = "";

            for (let i = firstDay; i > 0; i--) {
                days += `<div class="inactive">${prevLastDate - i + 1}</div>`;
            }

            for (let i = 1; i <= lastDate; i++) {
                let dateKey = `${year}-${month + 1}-${i}`;
                let classes = [];

                if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    classes.push("active");
                }
                if (selectedDates.has(dateKey)) {
                    classes.push("selected");
                }

                days += `<div class="${classes.join(" ")}" data-date="${dateKey}">${i}</div>`;
            }

            daysContainer.innerHTML = days;
            document.querySelectorAll(".days div").forEach(day => {
                if (!day.classList.contains("inactive")) {
                    day.addEventListener("click", () => {
                        let dateKey = day.getAttribute("data-date");
                        selectedDates.forEach(date => {
                            document.querySelector(`[data-date="${date}"]`)?.classList.remove("selected");
                        });
                        selectedDates.clear();
                        
                        selectedDates.add(dateKey);
                        day.classList.add("selected");
                        currentSelectedDate = dateKey;
                        setSelectedDate(dateKey);
                    });
                }
            });
        }

        prevBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        renderCalendar();

    }, [])

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            loginModal.onOpen();
            return false;
        }
        return true;
    };

    const scheduleDemo = async () => {
        if (!checkAuth()) return;

        if (!selectedDate || !selectedTime || !email) {
            alert('Please fill in all required fields');
            return;
        }

        setLoading(true);
        try {
            const payload = {
                date: selectedDate,
                time: selectedTime,
                email: email
            };

            const response = await Post(apis.schedule_demo, payload);
            
            if (response) {
                setSelectedDate('');
                setSelectedTime('');
                setEmail('');
                
                document.querySelectorAll('.days div.selected').forEach(day => {
                    day.classList.remove('selected');
                });
            }
        } catch (error) {
            console.error('Error scheduling demo:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='sec-form'>

            <div className="container">
                <div className="cmn-heading-all">
                    <h1>Schedule a demo</h1>
                </div>
                <div className="calendar-wrap">
                    <div className="step-progress">
                        <ul>
                            <li className='active'>01</li>
                            <li>02</li>
                        </ul>
                        <div className="progress-bar"></div>
                    </div>

                    <div className="flex-lft-rgt">
                        <div className="lft-col-cdl">
                            <div className="lft-col-cdl-top">
                                <div className='cd-hd-txt'>Schedule a call</div>
                                <p>Select the time for a call</p>
                                <div className="w-full relative lft-col-cdl-select">
                                    <Select
                                        name="industry"
                                        className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg !text-white"
                                        variant="solid"
                                        items={industry}
                                        placeholder="Industry"
                                        classNames={{ popoverContent: "!bg-white !p-0" }}
                                    >
                                        {(industrys) => (
                                            <SelectItem
                                                className={`${industry[industry.length - 1].key === industrys.key
                                                        ? "!border-none"
                                                        : "!border-b  !border-[#5E6973]"
                                                    } !bg-[#00000000] !rounded-none !outline-none !text-[#080707]`}
                                            >
                                                {industrys.label}
                                            </SelectItem>
                                        )}
                                    </Select>
                                </div>
                                
                                <div className="w-full relative lft-col-cdl-select mt-4">
                                    <input
                                        type="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full bg-[#47596833] rounded-xl py-3 px-4 text-white placeholder-gray-400"
                                        placeholder="Select time"
                                        required
                                    />
                                </div>
                                
                                <div className="w-full relative lft-col-cdl-select mt-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-[#47596833] rounded-xl py-3 px-4 text-white placeholder-gray-400"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <div className="time-zn-txt-wrap">
                                        <div className="time-zn-txt">Time zone</div>
                                        <p>Eastern Time - US & Canada (8:48 PM)</p>
                                    </div>
                                    <div className="time-zn-txt-wrap">
                                        <div className="time-zn-txt">Duration</div>
                                        <p>30 min</p>
                                    </div>
                                </div>

                            </div>

                            <div className="left-col-btm-flex">
                                <div className="left-col-btm-img">
                                    <Image src={userImage} alt='rightTopSdh' className="img-object" />
                                </div>
                                <div className="left-col-btm-cont">
                                    <div className="time-zn-txt">Takeshi Hirota</div>
                                    <p>Investor of Scalyx</p>
                                </div>
                            </div>
                        </div>
                        <div className="rgt-col-cdl">
                            <div className="calendar">
                                <div className='top-hdr-wrap'>
                                    <button id="prev"><Image src={leftArrow} alt='rightTopSdh' className="all-image-arrow" /></button>
                                    <h3 id="monthYear"></h3>
                                    <button id="next"><Image src={rightArrow} alt='rightTopSdh' className="all-image-arrow" /></button>
                                </div>
                                <div className="weekdays">
                                    <ul>
                                        <li>Sun</li>
                                        <li>Mon</li>
                                        <li>Tue</li>
                                        <li>Wed</li>
                                        <li>Thu</li>
                                        <li>Fri</li>
                                        <li>Sat</li>
                                    </ul>
                                </div>
                                <div className="days" id="days"></div>
                            </div>

                            <div className="calendar-btns">
                                <button 
                                    type='button' 
                                    className='btn-cmn-con'
                                    onClick={scheduleDemo}
                                    disabled={loading}
                                >
                                    {loading ? 'Scheduling...' : 'Continue'}
                                </button>
                            </div>
                        </div>
                        <Image src={calendarImage} alt='rightTopSdh' className="top-lft-img-sdh" />
                    </div>
                </div>

            </div>
            <Image src={rightTopSdh} alt='rightTopSdh' className="top-rgt-img-sdh" />
            <Image src={lftBtmpSdh} alt='rightTopSdh' className="btm-lft-img-sdh" />
            
            <LoginModal
                isOpen={loginModal.isOpen}
                onOpenChange={loginModal.onOpenChange}
            />
        </div>
    )
}

export default ScheduleDemo
