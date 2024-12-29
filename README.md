# React Native useEffect Cleanup Function Error

This repository demonstrates a common error in React Native involving the `useEffect` hook's cleanup function. The error arises when the cleanup function tries to access a component's state or props after the component has unmounted, leading to unexpected behavior or crashes.  The solution involves carefully checking for component unmount before accessing state or props within the cleanup function.

## Problem

The `bug.js` file contains a component that uses `useEffect` to set up an interval. The cleanup function attempts to log the component's state (`count`) after clearing the interval.  This leads to an error if the component unmounts before the cleanup function is executed.

## Solution

The `bugSolution.js` file presents a corrected implementation. It adds a check to ensure the component is still mounted before attempting to access `count`.  This prevents the error.

This example highlights the importance of defensive programming when working with lifecycle methods and cleanup functions in React Native.