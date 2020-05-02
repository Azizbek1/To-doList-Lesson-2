import React from 'react'
import './badge.scss';
import classNames from 'classnames';
// `badge badge--${color} ${className} `
const Badge = ({color, click, className }) => <i onClick={click} className={`badge badge--${color} ${className} `}></i>


export default Badge;
