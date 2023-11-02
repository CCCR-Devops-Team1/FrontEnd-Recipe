import React, { useState, useEffect, useRef } from 'react';
import './DropDown.css'

const Dropdown = (props) => {
    const [visibilityAnimation, setVisibilityAnimation] = useState(false);
    const dropdownRef = useRef(null);
    const [repeat, setRepeat] = useState();
    // 드롭다운 외부 클릭 이벤트 처리
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setVisibilityAnimation(false);
        }
    };

    useEffect(() => {
        if (props.visibility) {
            clearTimeout(repeat);
            setRepeat(null);
            setVisibilityAnimation(true);

            // 드롭다운이 열릴 때 이벤트 리스너 등록
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            setRepeat(setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400));

            // 드롭다운이 닫힐 때 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props.visibility]);

    return (
        <article
            ref={dropdownRef}
            className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}
        >
            {visibilityAnimation && props.children}
        </article>
    )
};

export default Dropdown;
