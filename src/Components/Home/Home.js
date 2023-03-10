import React from 'react'
import './home.css';

const Home = () => {
  return (
    <div className='hom'>
    <div class="summary-section-1 wfid_temp9392457858" style={{display:"inline-flex"}}>
    <div class="graph-content wfid_graph_body wfid_temp9392457986">
        <div class="heading d-flex wfid_temp9392458114">
            <div class="summary-overview wfid_temp9392458242">
                <p id="summary_overview_title" class="subtitle wfid_temp9392458370 p">Summary Overview</p>
            </div>
            <div class="one-row wfid_temp9392458498">
                <ol id="summary" class="d-flex wfid_summary wfid_temp9392458626 list">
                    <li id="today" class="wfid_today wfid_temp9392458754 listitem"><button id='summary_today' class='wfid_summary_today bg-transparent' style={{outline:"none", border: "0",
boxshadow: "none"}} onclick='todayData()'>Today</button></li>
                    <li id="week" class="active wfid_week wfid_temp9392458882 listitem"><button id='summary_week' class='wfid_summary_week bg-transparent' style={{outline:"none", border: "0",
boxshadow:"none"}} onclick='weekData()'>Week</button></li>
                    <li id="month" class="active wfid_month wfid_temp9392459010 listitem"><button id='summary_month' class='wfid_summary_month bg-transparent' style={{outline:"none", border: "0",
boxshadow:"none"}} onclick='monthData()'>Month</button></li>
                </ol>
            </div>
        </div>
        <div id="chart_panel" class="wfid_chart_panel wfid_temp9392459138" style={{height: "auto", width: "auto"}}><canvas id='lineChart' class='h-240 w-100' className='wfid_lineChart'></canvas></div>
    </div>
    <div id="dlr_content" class="dlr-content wfid_dlr_content wfid_temp9392459266">
        <div class="chart-header wfid_temp9392459394">
            <div class="chart-info wfid_temp9392459522">
                <p id="dlr_title_text" class="title wfid_dlr_label wfid_temp9392459650 p" style={{fontsize:"15px"}}>Delivered Percent</p>
                <p id="dlr_perc" class="subtitle wfid_dlr_perc wfid_temp9392459778 p">out of 0</p>
            </div>
        </div>
        <div class="chart-container wfid_chart_container wfid_temp9392459906">
            <div class="index-custom-pie-chart index-custom-apex-pie-chart w-auto h-auto wfid_temp9392460034"><canvas id='pieChart' class='wfid_pieChart'></canvas></div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Home;