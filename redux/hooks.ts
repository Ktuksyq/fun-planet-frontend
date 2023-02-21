import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";
import { AppDispatch, AppState } from "./store";

export const useAppDipatch= () =>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<AppState> = useSelector;