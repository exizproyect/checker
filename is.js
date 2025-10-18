let canAccess = true;

if (!document.getElementById("rgxAFX") && canAccess === true) {
  $("body").append(/* html */ `
    <button
      style="visibility: visible"
      id="showPanel"
      class="afx--input__default-button"
    >
      <p>⛄</p>
    </button>
    <div class="afx" style="visibility: visible" id="rgxAFX">
      <div class="afx--panel">
        <div class="afx--panel__content">
          <small style="color: rgb(255 0 0)">AFK XP FARM - S0LDIER</small>
          <div class="afx--flexitem">
            <div class="afx--flexitem__first">
              <p>Interval:</p>
            </div>
            <input
              class="afx--input number afx--flexitem__second"
              type="number"
              value="25"
              id="intervalTime"
            />
          </div>
          <div class="afx--flexitem">
            <div class="afx--flexitem__first">
              <p>Line:</p>
            </div>
            <select
              class="afx--input select afx--flexitem__second"
              id="lineOrientation"
            >
              <option value="orUp" selected>Up</option>
              <option value="orDown">Down</option>
              <option value="orLeft">Left</option>
              <option value="orRight">Right</option>
            </select>
          </div>
          <div class="afx--flexitem">
            <div class="afx--flexitem__first">
              <small class="recordActualSeconds">Current Seconds: 0.00</small>
            </div>
            <button class="afx--input afx--flexitem__second button recordPoint">
              Record
            </button>
          </div>
          <button
            class="afx--input button startAfkButton"
            style="margin-top: 10px"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  `);
}
