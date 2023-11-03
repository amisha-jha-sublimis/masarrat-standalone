import React, { useState } from "react";
import Reactselect from '../../../components/molecules/select';
import Empty from '../../atom/empty';
import EmptyImage from '../../../assets/images/myaccount/quote.png';
import AcrylicTable from '../../../assets/images/myaccount/acrylic-table1.png';
import Image from "next/image";
import Link from "next/link";

// let arr = []

function Quote(){
    return(
            <>
            <h5>My Quote</h5>
            {
                // arr.length ? <>
                    <div className="quoteData">
                      <FilterMonth/>
                      <div className="quoteTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Quote No.</th>
                                    <th>Product Details</th>
                                    <th>Qty</th>
                                    <th>Remark</th>
                                    <th>Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12 Jan 2023</td>
                                    <td>MAZE202471002</td>
                                    <td>
                                        <ul>
                                            <li><Image src={AcrylicTable} alt="Product Acrylic Table"></Image></li>
                                            <li>
                                                <span class="tag-wrap"><span class="tags">LUXURY</span></span>
                                                <p>Acrylic Centre Table - M-CT1</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <p>Lorem Ipsum Is Simply Dummy Text Of Printing And Typesetting Industry.</p>
                                    </td>
                                    <td><span className="open">Open</span></td>
                                </tr>
                                <tr>
                                    <td>12 Jan 2023</td>
                                    <td>MAZE202471002</td>
                                    <td>
                                        <ul>
                                            <li><Image src={AcrylicTable} alt="Product Acrylic Table"></Image></li>
                                            <li>
                                                <span class="tag-wrap"><span class="tags">LUXURY</span></span>
                                                <p>Acrylic Centre Table - M-CT1</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <p>Lorem Ipsum Is Of And Typesetting Iss Industry Lorem Ipsum <Link href={"/"}>Read More</Link></p>
                                    </td>
                                    <td><span className="open">Open</span></td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                // </> : <Empty imgsrc={EmptyImage} content={"No Quote Order Found Yet"} />
            }
            </>   
    )
}
export default Quote;

// Last month drop down section 
export const FilterMonth = () => {

    const sortData = [
        { id: 1, label: "Past 3 Month", value: "past3month" },
        { id: 2, label: "Past 6 Month", value: "past6month" },
        { id: 3, label: "Past 9 Month", value: "past9month" },
        { id: 4, label: "Past 12 Month", value: "past12month" },
    ]

    const [selectMonth, setselectMonth] = useState(sortData[3].value);
    const handleStateChange = (name, value) => {
        setselectMonth(value);
    }
    const handleError = () => { }


    return (
        <div className="filterMonth">
            <Reactselect
                name={"selectMonth"}
                id={"selectMonth"}
                label={"Showing <span>3 orders</span> in"}
                options={sortData}
                value={selectMonth}
                lblClass={"input-lable"}
                onChange={handleStateChange}
                onBlur={handleError}
                class={"form-control"}
            />
        </div>
    )
}

