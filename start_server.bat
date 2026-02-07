@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
    python -m http.server 4173
    goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
    py -3 -m http.server 4173
    goto :eof
)

echo Python nao encontrado no PATH.
echo Instale o Python e marque a opcao "Add Python to PATH".
pause
