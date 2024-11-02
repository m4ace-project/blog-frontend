import React from 'react'

function Check() {
  return (
    <div>
          <div class="text-end ">
        Omolola Adesanya Facebook
    </div>
    <div class="mt-6">
        <p class="text-[#001F54] ml-[2em] "><span class="text-2xl md:text-3xl lg:text-4xl  font-semibold">Check your notification on another device</span> 
            <br/><span class="text-sm lg:text-base">We sent a notification to your
                other device. Check your notifications and approve the login to continue</span></p> 
        <img  class="w-[15em] mt-5 mx-auto md:mt-10" src="./src/assets/mdi_shield-unlocked-outline.png" alt=""/>
        <div class="flex ml-5 mt-[5em]">
            <img class="w-[15px] h-[15px] mt-3  mr-5 " src="./src/assets/mynaui_dots-circle.png" alt=""/>
            <p class="text-[#001F54] text-sm"><span>Waiting for approval</span><br/>
                <span class="text-xs">It may take a few minutes to get the notification on your other device</span> </p>
        </div>
    </div>
    </div>
  )
}

export default Check
