import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div class="Home">

  <div class="hom">
  	<div class="hom1">
  		<div class="hom1_left">
  			<h3>Summary Overview</h3>
  			<p>Today</p>
  			<p>Week</p>
  			<p>Month</p>
  		</div>
  		<div class="hom1_right">
  			<h2>Delivered Percent</h2>
  			<p style={{color: "#aaa"}}>out of 0</p>
  			<h3 style={{textalign: "center", paddingtop: "60px"}}>No Data%</h3>
  			
  		</div>
  	</div>

  </div>

 <div class="hom2_0">
 	<h2>Quick Status</h2>
  <div class="hom2">
  		<div class="hom2_1">
  			<h3>Today</h3>
  			<h4>0</h4>
  		</div>

  		<div class="hom2_1">
  			<div class="hom2_2">
  			  <h3>Week</h3>
  			  <p style={{paddingtop: "5px"}}>(Excluding Today)</p>
  			  <h4>0</h4>
  		   </div>
  		</div>

  		<div class="hom2_1">
  			<h3>Month</h3>
  			<h4>0</h4>
  		</div>
  		
  	</div>
  </div>

  <div class="hom3">
  	<h2>Scheduled SMS</h2>
  	
  </div>

  {/* ============Step4============== */}

  <div class="hom4">
  	
  	<div class="hom4_0">
  	<div class="hom4_left">
  		<h3>Quick Shortcuts</h3>
  		<div class="hom4_left1">
  			<p></p>
  			<p style={{width: "150px"}}>DLT Management</p>
  			<p><i class="fa-light fa-arrow-up-right-from-square"></i></p>
  		</div>

  		<div class="hom4_left2">
  			<p><i class="fa-solid fa-bullhorn"></i></p>
  			<p style={{width: "180px"}}>Scheduled Campaigns</p>
  			<p>0</p>
  		</div>
  		<div class="hom4_left3">
  			<p><i class="fa-solid fa-user"></i></p>
  			<p style={{width: "150px"}}>Inactive Accounts</p>
  			<p>0</p>
  		</div>
  		<div class="hom4_left4">
  			<p><i class="fa-solid fa-user"></i></p>
  			<p style={{width: "150px"}}>Sender ID</p>
  			<p>0</p>
  		</div>

  		<div class="hom4_left5">
  			<p><i class="fa-solid fa-message"></i></p>
  			<p style={{width: "150px"}}>Templates</p>
  			<p>0</p>
  		</div>
  		
  	</div>
  	<div class="hom4_right">
  		<h3>Phonebook - Quick Shortcuts</h3>
  		<div class="hom4_right1">
  			<div class="hom4_right2">
  				<p><i class="fa-regular fa-user-pen"></i></p>
  				<p>0 Contacts</p>
  			</div>
  			<div  class="hom4_right2_1">
  				<p><i class="fa-solid fa-user-group"></i></p>
               <p>0 Groups</p>
  			</div>
  		</div>
  	</div>
  </div>
  </div>

  </div>
  )
}

export default Home;