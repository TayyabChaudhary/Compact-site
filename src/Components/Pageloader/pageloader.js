import React from 'react'
import '../All-Sections/All-Sections-Scss/Pageloader/pageloader.scss';
import $ from 'jquery';
export default function pageloader() {
    $(document).ready(function() {
 
        // Fakes the loading setting a timeout
          setTimeout(function() {
              $('body').addClass('loaded');
          }, 100);
       
      });
    return (
        <div>
            <div id="loader-wrapper">
  <div id="loader"></div>
  <div className="loader-section section-left"></div>
  <div className="loader-section section-right"></div>
</div>
        </div>
    )
}
