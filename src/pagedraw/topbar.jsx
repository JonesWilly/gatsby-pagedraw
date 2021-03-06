// Generated by https://pagedraw.io/pages/5837
import Link from 'gatsby-link';
import React from 'react';
import './topbar.css';

function render() {
    return <div className="topbar">
        <div className="topbar-0">
            <div className="topbar-topbar-5">
                <div className="topbar-0-0-0">
                    <div className="topbar-topbar-7">
                        <div className="topbar-0-0-0-0-0">
                            <div className="topbar-text-6">{ this.props.title }</div>
                            <div className="topbar-0-0-0-0-0-1" /> 
                            <Link to={"/"}>
                                <div className="topbar-text-0">Home</div>
                            </Link>
                            <Link to={"/other"}>
                                <div className="topbar-text-3">Other</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="topbar-0-0-1" /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}