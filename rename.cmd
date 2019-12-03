@echo off
:: Add the paths for the F# SDK (from higher version to lower)
set FSHARPSDK=^
C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\FSharp;^
C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\CommonExtensions\Microsoft\FSharp;^
C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\CommonExtensions\Microsoft\FSharp;^
C:\Program Files (x86)\Microsoft Visual Studio\2017\Professional\Common7\IDE\CommonExtensions\Microsoft\FSharp;^
C:\Program Files (x86)\Microsoft SDKs\F#\4.1\Framework\v4.0\;^
C:\Program Files (x86)\Microsoft SDKs\F#\4.0\Framework\v4.0\;^
C:\Program Files (x86)\Microsoft SDKs\F#\3.1\Framework\v4.0\;^
C:\Program Files (x86)\Microsoft SDKs\F#\3.0\Framework\v4.0\

cls
:: Execute the script "only" with the first "fsianycpu.exe" found
for %%i in (fsianycpu.exe) do "%%~$FSHARPSDK:i" rename.fsx %*

pause