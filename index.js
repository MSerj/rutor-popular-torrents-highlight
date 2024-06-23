// ==UserScript==
// @name            RuTor popular torrents highlight
// @description     Highlight popular torrents (based on peers)
// @version         1.01
// @match           *://rutor.is/*
// @match           *://rutor.org/*
// @match           *://rutor.info/*
// @run-at          document-end
// @grant           none
// @copyright       2024, MSerj
// @license         MIT
//
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_addStyle

// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIYCAYAAAAmbzVqAAAACXBIWXMAAAsTAAALEwEAmpwYAAA54GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjQtMDYtMjJUMTg6MDA6MTUrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyNC0wNi0yMlQxODowMjoxMCswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjQtMDYtMjJUMTg6MDI6MTArMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MGE4MDkxOTktZTMxMy03YjQ0LWExNWYtODZmMzA3OGJkZjY5PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmExMmQ0ZmZmLWFjZjktODM0Zi05Njc1LWE1MzA1OTM3NTJlMjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmExMmQ0ZmZmLWFjZjktODM0Zi05Njc1LWE1MzA1OTM3NTJlMjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDphMTJkNGZmZi1hY2Y5LTgzNGYtOTY3NS1hNTMwNTkzNzUyZTI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjQtMDYtMjJUMTg6MDA6MTUrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MGE4MDkxOTktZTMxMy03YjQ0LWExNWYtODZmMzA3OGJkZjY5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDI0LTA2LTIyVDE4OjAyOjEwKzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjU0MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41MzY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PmLM52kAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAEBVJREFUeNrs3dFu27gWhlGx8Jtk3v+J6mfRXBQDTNEGiWz9lDb3WlcHOJ02JinyC526Y+MlHx8fBgFgjj38+w9DnPcwBAA0iovv/pkiRHAAIC6mf20CRHAAIDIEiOAAQGSs/ZrEh+AAQGhMe53CQ3AAIDKmvnbxITgAEBrTxkN4CA4AhIbwEBwACA3hsYwf1gAAYsPYpbnhAMBhec04trrtEBwACA3hEectFQDEhjEWHABcdgiKDdEhOABw+Ik8wQGA2MAcCA4A+nx3LToEBwAONxpEoOAAcKhhjgQHAA4y6s+V4ABwgGHOBAcADi7qz53gAHBgYQ4FBwBig/pzKTgAHFCYU8EBwNuHktgQHYIDAIcR68+z4ABwCGG+BQcAYoP68y44ABw6mH/BAYDYoP46EBwADhmsB8EBgNig/roQHAAOFawPwQGA2KD+OhEcAA4RrBfBAcAfB4fYoFx0CA4ABwbWkOAAQGxQfy0JDgAHBNaU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

// @namespace       https://greasyfork.org/en/users/1321619-mserj
// ==/UserScript==

// General styles
GM_addStyle('#mserj_settings { width: 400px; height: 260px; position: fixed; left: 0; top: 0; background-color: #fff; border: 1px solid #a00; }')
GM_addStyle(
	`#mserj_settings .header {\tbackground: url("${location.origin}/i/backgr.png") 0 -13px;\theight: 41px;\tcolor: #000000;\tfont-weight: bold; text-align: center; }`
)
GM_addStyle('#mserj_settings .fields { padding: 5px; }')
GM_addStyle('#mserj_settings .fields .row { clear: both; height: 30px; }')
GM_addStyle('#mserj_settings .fields .row .col1 { width: 300px; float: left; }')
GM_addStyle('#mserj_settings .fields .row .col2 { width: 90px; float: left; }')
GM_addStyle('#mserj_settings .mserj-color { max-width: 70px; max-height: 20px; }')

// Main script
;(() => {
	let settings = {}

	const loadSettings = () => {
		settings = {
			line_color: GM_getValue('line_color', '#ff0000'),
			mark_repack: GM_getValue('mark_repack', false),
			repack_color: GM_getValue('repack_color', '#ddffdd'),
			mark_fitGirl: GM_getValue('mark_fitGirl', true),
			fitGirl_color: GM_getValue('fitGirl_color', '#ddddff'),
			mark_highQuality: GM_getValue('mark_highQuality', true),
			highQuality_color: GM_getValue('highQuality_color', '#f4ddff'),
			mark_hidden: GM_getValue('mark_hidden', true),
			hidden_opacity: GM_getValue('hidden_opacity', 0.1),
			hidden_words: GM_getValue('hidden_words', 'МР3,FLAC,flac,КПК,Футбол,UFC,книг,книги,MP3')
		}
	}

	const setStyles = () => {
		GM_addStyle('.mserj-line { height: 3px; background-color: ' + settings.line_color + '; }')
		GM_addStyle('tr.mserj-repack td { background-color: ' + settings.repack_color + '; }')
		GM_addStyle('tr.mserj-fitGirl td { background-color: ' + settings.fitGirl_color + '; }')
		GM_addStyle('tr.mserj-4K td { background-color: ' + settings.highQuality_color + '; }')
		GM_addStyle(`tr.mserj-hidden { ${settings.hidden_opacity ? `opacity: ${settings.hidden_opacity}; display: table-row` : 'display: none'}; }`)
	}

	const toggleSettings = () => {
		const $sett_wnd = $('#mserj_settings'),
			x = parseInt(($(window).width() - $sett_wnd.width()) / 2),
			y = parseInt(($(window).height() - $sett_wnd.height()) / 2)

		$('#mserj_line_color').val(settings.line_color)

		$('#mserj_mark_repack').attr('checked', !!settings.mark_repack)
		$('#mserj_repack_color').val(settings.repack_color)

		$('#mserj_mark_fitGirl').attr('checked', !!settings.mark_fitGirl)
		$('#mserj_fitGirl_color').val(settings.fitGirl_color)

		$('#mserj_mark_highQuality').attr('checked', !!settings.mark_highQuality)
		$('#mserj_highQuality_color').val(settings.highQuality_color)

		$('#mserj_mark_hidden').attr('checked', !!settings.mark_hidden)
		$('#mserj_hidden_opacity').val(settings.hidden_opacity * 10)
		$('#mserj_hidden_words').val(settings.hidden_words)

		$('#mserj_settings').css({ left: x, top: y }).toggle('fast')
	}

	const addSettings = () => {
		const $tab = $('<a href="javascript:;" class="menu_b"><div>Настройки</div></a>')

		$tab.click(toggleSettings)
		$('#menu').append($tab)

		const $wnd = $(
			'<div id="mserj_settings" style="display: none">' +
				'<div class="header">Настройка скрипта</div>' +
				'<div class="fields">' +
				'<div class="row"><div class="col1">Цвет полоски популярности раздачи:</div><div class="col2"><input type="color" class="mserj-color" id="mserj_line_color" /></div></div>' +
				'<div class="row"><div class="col1"><input type="checkbox" id="mserj_mark_repack">Выделять репаки</div><div class="col2"><input type="color" class="mserj-color" id="mserj_repack_color" /></div></div>' +
				'<div class="row"><div class="col1"><input type="checkbox" id="mserj_mark_fitGirl">Выделять репаки от FitGirl</div><div class="col2"><input type="color" class="mserj-color" id="mserj_fitGirl_color" /></div></div>' +
				'<div class="row"><div class="col1"><input type="checkbox" id="mserj_mark_highQuality">Выделять 4K раздачи</div><div class="col2"><input type="color" class="mserj-color" id="mserj_highQuality_color" /></div></div><div class="row"><div class="col1"><input type="checkbox" id="mserj_mark_hidden">Скрывать не интересные раздачи</div><div class="col2"><input type="range" class="mserj-color" min="0" max="10" id="mserj_hidden_opacity" /></div></div>' +
				'<div class="row"><div class="col1">Скрыть раздачи включающие (через запятую):</div><div class="col2"><input type="text" class="mserj-color" id="mserj_hidden_words" /></div></div>' +
				'<div class="row" style="text-align: center"><input type="button" value="Сохранить настройки" id="mserj_save_settings" /></div>' +
				'</div>' +
				'</div>'
		)
		$('body').append($wnd)

		$('#mserj_save_settings').live('click', () => {
			GM_setValue('line_color', $('#mserj_line_color').val())
			GM_setValue('mark_repack', $('#mserj_mark_repack').is(':checked'))
			GM_setValue('repack_color', $('#mserj_repack_color').val())
			GM_setValue('mark_fitGirl', $('#mserj_mark_fitGirl').is(':checked'))
			GM_setValue('fitGirl_color', $('#mserj_fitGirl_color').val())
			GM_setValue('mark_highQuality', $('#mserj_mark_highQuality').is(':checked'))
			GM_setValue('highQuality_color', $('#mserj_highQuality_color').val())
			GM_setValue('mark_hidden', $('#mserj_mark_hidden').is(':checked'))
			GM_setValue('hidden_opacity', $('#mserj_hidden_opacity').val() * 0.1)
			GM_setValue('hidden_words', $('#mserj_hidden_words').val())

			// location.reload()
			loadSettings()
			setStyles()
			markLines()
			$('#mserj_settings').toggle('fast')
		})
	}

	const markLines = onInit => {
		const max_width = $(window).width() - 280 - 214

		$('tr.gai, tr.tum').each(function () {
			const $trs = $(this).find('td'),
				$spans4 = $($trs.get().pop()).find('span'),
				sp1as$ = $($trs.get(1)).find('a')
			let count = (parseInt($.trim($($spans4.get(0)).text())) + parseInt($.trim($($spans4.get(1)).text()))) * 1.3
			count = Math.min(max_width, parseInt(count / 1))

			if (onInit) {
				$($trs.get(1)).append('<div class="mserj-line" style="width: ' + count + 'px"></div>')
			} else {
				$(this).removeClass('mserj-repack mserj-fitGirl mserj-4K mserj-hidden')
			}

			const sp1a = sp1as$.length === 2 ? sp1as$.get(1) : sp1as$.get(2)

			if (settings.mark_repack && (sp1a.innerHTML.includes('RePack') || sp1a.innerHTML.includes('repack'))) {
				$(this).addClass('mserj-repack')
			}
			if (settings.mark_fitGirl && (sp1a.innerHTML.includes('FitGirl') || sp1a.innerHTML.includes('fitgirl'))) {
				$(this).addClass('mserj-fitGirl')
			}
			if (settings.mark_highQuality && (sp1a.innerHTML.includes(' 4K') || sp1a.innerHTML.includes('2160p'))) {
				$(this).addClass('mserj-4K')
			}
			if (settings.mark_hidden && settings.hidden_words.split(',').some(word => sp1a.innerHTML.includes(word))) {
				$(this).addClass('mserj-hidden')
			}
		})
	}

	// Sorting functionality
	function sortByColumn(sortWhat, type, field, btnIndex) {
		let dataClicked = sortWhat.sorti[btnIndex].press,
			press = this

		sortWhat = Object.assign({}, sortWhat)

		if (type === 0) {
			sortWhat.razd.sort(function (a, b) {
				const an = a[field],
					bn = b[field]
				return an - bn
			})
		} else if (type === 1) {
			sortWhat.razd.sort(function (a, b) {
				const x = a[field].toLowerCase()
				const y = b[field].toLowerCase()

				if (x < y) return -1
				if (x > y) return 1
				return 0
			})
		}

		if (dataClicked) sortWhat.razd.reverse()

		for (var i = 0; i < sortWhat.razd.length; i++) {
			let elDetach = $(sortWhat.razd[i].es),
				childs = null

			if (elDetach.next().next().is('.my_tr')) childs = [elDetach.next(), elDetach.next().next()]

			elDetach.detach().appendTo(sortWhat.category)

			if (childs != null) {
				$(childs[1]).detach().insertAfter(elDetach)
				$(childs[0]).detach().insertAfter(elDetach)
			}
		}

		if (btnIndex === 3 || btnIndex === 4) {
			press = $(sortWhat.sorti[btnIndex].el_img)
		}

		sortWhat.sorti.map(function (currArr, indexArr) {
			if (indexArr !== btnIndex) {
				currArr.press = false

				if ($(currArr.el_img).is('img')) $(currArr.el_img).css('transform', 'scaleY(1)')
				else $(currArr.el_img).find('img').css('transform', 'scaleY(1)')
			}
		})

		if ($(press).is('img')) {
			$(press).css('transform', 'scaleY(' + (dataClicked ? '1' : '-1') + ')')
		} else {
			$(press)
				.find('img[width^=15]')
				.css('transform', 'scaleY(' + (dataClicked ? '1' : '-1') + ')')
		}

		sortWhat.sorti[btnIndex].press = !sortWhat.sorti[btnIndex].press
	}

	// Эвенты для заголовков
	function setEventHeaderTitle(massiv) {
		let titleSort = [],
			titles = $(this)
				.find('.backgr > td')
				.each(function (indexEl, el) {
					console.log('el', el)
					if (indexEl === 3 && el.textContent === 'Пиры') {
						let img = $('<img>')
								.attr({ src: 'https://raw.githubusercontent.com/AlekPet/Rutor-Preview-Ajax/master/assets/images/arrow_icon.gif', width: '15' })
								.css({ position: 'relative', top: '3px', cursor: 'pointer' })
								.attr({ title: 'Сортировать по Раздающим', id: '_Up' }),
							img_clone = img.clone(false).attr({ title: 'Сортировать по Качающим', id: '_Down' })
						$(el)
							.css({ width: '90px' })
							.append($('<span class="green">').text(' Р').css({ cursor: 'pointer' }).attr({ title: 'Сортировать по Раздающим', id: '_Up' }))
							.append(img)
							.append($('<span class="red">>').text('К').css({ cursor: 'pointer' }).attr({ title: 'Сортировать по Качающим', id: '_Down' }))
							.append(img_clone)
						titleSort.push(
							{
								el_img: img,
								index: indexEl,
								press: false
							},
							{
								el_img: img_clone,
								index: indexEl + 1,
								press: false
							}
						)
					} else {
						let img = $('<img>')
							.attr({ src: 'https://raw.githubusercontent.com/AlekPet/Rutor-Preview-Ajax/master/assets/images/arrow_icon.gif', width: '15' })
							.css({ position: 'relative', top: $(el).children().first().is('img') ? '-10px' : '3px' })
						$(el)
							.css({ width: '80px', cursor: 'pointer' })
							.attr('title', 'Сортировать по "' + ($(el).children().first().is('img') ? 'Добавлено' : $(el).text()) + '"')
							.append(img)
						titleSort.push({
							el_img: el,
							index: indexEl,
							press: false
						})
					}
				})
		massiv.sorti = titleSort
		// By date
		titles.eq(0).click(function () {
			sortByColumn.call(this, massiv, 0, 'date', 0)
		})
		// By name
		titles.eq(1).click(function () {
			sortByColumn.call(this, massiv, 1, 'name', 1)
		})
		// By size
		titles.eq(2).click(function () {
			sortByColumn.call(this, massiv, 0, 'size', 2)
		})
		// By Up/Down
		titles
			.eq(3)
			.find('div, img')
			.each(function (index, el) {
				$(this).click(function () {
					if (el.id === '_Up') {
						sortByColumn.call(el, massiv, 0, 'up', 3)
					} else {
						sortByColumn.call(el, massiv, 0, 'down', 4)
					}
				})
			})
	}

	function sorting() {
		if (!location.href.includes('/torrent/')) {
			// Ищим классы для получения данных
			let massivT = [],
				month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				razmeronosti = ['kB', 'MB', 'GB']

			$('#index > table').each(function (idx) {
				let objCat = { category: this, name: $(this).prev().text(), razd: [] }

				$(this)
					.find('.gai, .tum')
					.each(function () {
						const rowWithComments = this.children.length === 5

						const dateCell = this.children[0]
						const nameCell = this.children[1]
						const sizeCell = this.children[rowWithComments ? 3 : 2]
						const peersCell = this.children[rowWithComments ? 4 : 3]

						const name = nameCell.children[2].textContent || nameCell.children[0].getAttribute('title')
						const size = sizeCell.textContent
						const colR = peersCell.children[0].textContent
						const colU = peersCell.children[2].textContent

						// Date
						let dateT = dateCell.textContent
						dateT = dateT.split(/\s+/)

						$.each(month, function (idx, val) {
							if (dateT[1] === val.substr(0, 3)) dateT[1] = idx
						})

						dateT = new Date(parseInt('20' + dateT[2]), dateT[1], dateT[0], 0, 0, 0)

						// Sizes
						let complSize
						$.each(razmeronosti, function (idx, val) {
							if (size.includes(val)) {
								complSize = size.substr(0, size.indexOf(razmeronosti[idx])) * 1
								if (idx === 1) {
									complSize = complSize * 1000
								} else if (idx === 2) {
									complSize = complSize * 1000000
								}
							} else {
								complSize = parseFloat(size)
							}
						})

						objCat.razd.push({ es: this, date: dateT, name, size: complSize, up: colR, down: colU })
					})
				massivT.push(objCat)
				setEventHeaderTitle.call(this, massivT[idx])
			})
		}
	}

	// settings
	loadSettings()
	setStyles()
	addSettings()
	markLines(true)

	sorting()
})()
