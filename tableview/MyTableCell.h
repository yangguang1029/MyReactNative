//
//  MyTableCell.h
//  test0517
//
//  Created by Guang Yang on 2018/5/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@interface MyTableCell : UIView

-(void)reuseToIndex:(NSInteger)index;

@property (nonatomic) RCTBubblingEventBlock onChange;

@end
