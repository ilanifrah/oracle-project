@echo off
REM Opens Oracle in a specific browser.
REM Edit the path below to point to YOUR browser executable.

REM ── Option 1: Google Chrome (default profile) ──
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%~dp0index.html"

REM ── Option 2: Microsoft Edge ──
REM start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" "%~dp0index.html"

REM ── Option 3: Firefox ──
REM start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "%~dp0index.html"
