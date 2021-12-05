import React, { Component } from 'react'
import DaftarMakan from '../Lib/DaftarMakanan'
import Header from './Header'

class MenuMakanan extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h3>Daftar Makanan Favourite</h3>
                <table style={{ width: "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMakan.map((data, index) => {
                                return(
                                    <td>
                                        <center>
                                            <img 
                                                src={data.img}
                                                alt="product makanan"
                                                width="150"
                                                height="100"
                                            />
                                            <p>{data.NamaMakanan}</p>
                                            <p>Harga : Rp. {data.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MenuMakanan
