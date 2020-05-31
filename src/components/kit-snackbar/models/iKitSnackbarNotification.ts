import { iKitSnackbarNotificationOptions } from "./iKitSnackbarNotifitcationOptions";
import { iKitSnackbarNotificationAction } from "./iKitSnackbarNotificationAction";

export interface iKitSnackbarNotification {
	id: string;
	type: "error" | "info" | "warning" | string;
	text: string;
	options: iKitSnackbarNotificationOptions;
	actions: iKitSnackbarNotificationAction[];
}
