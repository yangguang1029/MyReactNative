//
//  MyTableView.h
//  test0517
//
//  Created by Guang Yang on 2018/5/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIView.h>
#import <UIKit/UIKit.h>
#import <React/RCTView.h>
#import <React/RCTBridge.h>

@interface MyTableView : UIView<UITableViewDelegate, UITableViewDataSource>

-(id) initWithBridge:(RCTBridge*)bridge;

@property (nonatomic, assign) int rowCount;

@end
