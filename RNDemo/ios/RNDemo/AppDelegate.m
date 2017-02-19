/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

//#import "RCTOneSignal.h"
#import <OneSignal/OneSignal.h>

@implementation AppDelegate
//@synthesize oneSignal = _oneSignal;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [OneSignal initWithLaunchOptions:launchOptions appId:@"7e0136fd-e9d0-4b65-a273-9a8ff370dda6"];
  NSURL *jsCodeLocation;
  
 // self.oneSignal = [[_oneSignal alloc] initWithLaunchOptions:launchOptions appId:@"7e0136fd-e9d0-4b65-a273-9a8ff370dda6"];

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNDemo"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

//- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)notification {
//  [RCTOneSignal didReceiveRemoteNotification:notification];
//}
@end
