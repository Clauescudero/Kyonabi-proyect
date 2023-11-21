import React, { useState } from 'react';
import './Calendar.css';
import DayCell from './DayCell';

function Calendar() {
    return (
        <div className="container-fluid calendar-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="calendar">
                        <div className="boton-perfil">
                            <button className="btn btn-primary me-2" style={{ backgroundColor: 'aliceblue', color: 'black' }}> <a href="/Perfil">Tu Perfil</a></button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <blanck />
                                    <th>Ene</th>
                                    <th>Feb</th>
                                    <th>Mar</th>
                                    <th>Abr</th>
                                    <th>May</th>
                                    <th>Jun</th>
                                    <th>Jul</th>
                                    <th>Ago</th>
                                    <th>Sep</th>
                                    <th>Oct</th>
                                    <th>Nov</th>
                                    <th>Dic</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <DayCell />
                                    <blanck />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <DayCell />
                                    <blanck />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                    <DayCell />
                                </tr>
                                <tr>
                                    <td>31</td>
                                    <DayCell />
                                    <blanck />
                                    <blanck />
                                    <DayCell />
                                    <blanck />
                                    <DayCell />
                                    <blanck />
                                    <DayCell />
                                    <DayCell />
                                    <blanck />
                                    <DayCell />
                                    <blanck />
                                    <DayCell />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-6 col-sm-4">
                    <div className="legend">
                        <h2>¡Cambia de color haciendo clic!</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Color</th>
                                    <th scope="col"></th>
                                    <th scope="col">Significado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ background: 'Gold' }}></td>
                                    <td>¡Estupendo!</td>
                                    <td>Un día fantástico. </td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'LightGreen' }}></td>
                                    <td>Muy bueno</td>
                                    <td>Un día feliz.</td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'LightPink' }}></td>
                                    <td>Concentrado</td>
                                    <td>Un día bueno.</td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'Coral' }}></td>
                                    <td>Normal</td>
                                    <td>Un día típico.</td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'FireBrick' }}></td>
                                    <td>Estresado</td>
                                    <td>No el mejor día.</td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'DarkSlateBlue' }}></td>
                                    <td>Frustrado</td>
                                    <td>No buen día.</td>
                                </tr>
                                <tr>
                                    <td style={{ background: 'CornflowerBlue' }}></td>
                                    <td>Desanimado</td>
                                    <td>Un día triste.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;