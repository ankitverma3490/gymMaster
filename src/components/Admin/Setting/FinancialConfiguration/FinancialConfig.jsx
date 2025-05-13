import React, { useState } from 'react';
import FinancialPaymentMethod from './PaymentMethod/FinancialPaymentMethod'; // Make sure this component exists
import PosPayment from './PaymentMethod/PosPayment';
import CashDrawer from './PaymentMethod/CashDrawer';
import POSDiscounts from './PaymentMethod/POSDiscounts';
import TaxSettings from './Tax/TaxSetting';
import BillingProviders from './FinancialBilling/BillingProviders';
import BillingDays from './FinancialBilling/BillingDays';
import AccountingLock from './AccountingLock/AccountingLock';

function FinancialConfig() {
  const [activeMenu, setActiveMenu] = useState('Discount Codes / Referrals');
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]); // Track categories state

  const sideMenuItems = [
    { id: 'Discount Codes / Referrals', subItems: [] },
    { id: 'Point of Sale', subItems: ['Payment Methods', 'POS Stations', 'Cash Drawer', 'POS Discounts'] },
    { id: 'Tax Rates', subItems: [] },
    { id: 'Billing', subItems: ['Billing Providers', 'Billing Days'] },
    { id: 'Accounting Lock Period', subItems: [] },
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveSubMenu('');
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { id: categories.length + 1, name: '', description: '' },
    ]);
  };

  const renderContent = () => {
    if (activeMenu === 'Discount Codes / Referrals') {
     
        return (
            <div className="container-fluid bg-light p-4">
            <div className="">
              <div className="row mb-3">
                <div className="col-12 d-flex justify-content-between">
                  <h3>Discount Codes</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-primary">Adjust Membership Discount Codes</button>
                    <button className="btn btn-primary">Adjust Booking Discount Codes</button>
                  </div>
                </div>
              </div>
      
              <div className="row mb-3">
                <div className="col-12 d-flex justify-content-between">
                  <h3>Referrals</h3>
                  <button className="btn btn-primary">Adjust Referrals</button>
                </div>
              </div>
            </div>
          </div>
        );
      
    }

    if (activeMenu === 'Point of Sale') {
      if (activeSubMenu === 'Payment Methods') {
        return <div><FinancialPaymentMethod /></div>;
      }else if (activeSubMenu === 'POS Stations') {
        return <div><PosPayment/></div>;
      } else if (activeSubMenu === 'Cash Drawer') {
        return <div><CashDrawer/></div>;
      } else if (activeSubMenu === 'POS Discounts') {
        return <div><POSDiscounts/></div>;
      }else {
        return (
          <div>
          
          </div>
        );
      }
    }
    if (activeMenu === 'Tax Rates') {
       
          return (
              <TaxSettings/>
          );
        
      }
      

    if (activeMenu === 'Billing') {
      if (activeSubMenu === 'Billing Providers') {
        return <div><BillingProviders/></div>;
      } else if (activeSubMenu === 'Billing Days') {
        return <div><BillingDays/></div>;
      }
    }

    if (activeMenu === 'Accounting Lock Period') {
        return (
            <AccountingLock/>
        );
      }

    
  };

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100 bg-light">
      {/* Sidebar */}
      <div className="col-md-2 bg-white border-md-end p-3">
        {sideMenuItems.map(menuItem => (
          <div key={menuItem.id}>
            <div
              className={`${
                menuItem.id === activeMenu ? 'bg-primary text-white' : 'bg-secondary text-white'
              } p-3 cursor-pointer font-weight-bold`}
              onClick={() => handleMenuClick(menuItem.id)}
            >
              {menuItem.id}
            </div>

            {menuItem.id === activeMenu && menuItem.subItems.length > 0 && (
              <div className="pl-3">
                {menuItem.subItems.map((subItem, index) => (
                  <div
                    key={index}
                    className="py-2 text-black cursor-pointer"
                    onClick={() => handleSubMenuClick(subItem)}
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="col-md-10 p-4">
        <div className="bg-white border rounded shadow-sm p-4">
          {/* Dynamic Content Rendering */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default FinancialConfig;
