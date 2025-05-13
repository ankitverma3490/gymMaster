import React, { useState } from 'react';

function BillingProviders() {
  const [providers, setProviders] = useState([
    { name: '3rd Party Billing Company', enabled: false },
    { name: 'BlueFin', enabled: false },
    { name: 'Clover Connect', enabled: true },
    { name: 'EzyPay', enabled: false },
    { name: 'Global Pay', enabled: false },
    { name: 'Go Cardless', enabled: false },
    { name: 'Payrix', enabled: false },
    { name: 'PaySafe', enabled: true },
    { name: 'PayStack', enabled: false },
    { name: 'PUBLIC BANK BERHAD', enabled: false },
    { name: 'Stripe', enabled: true }
  ]);

  const toggleProviderStatus = (index) => {
    const updatedProviders = [...providers];
    updatedProviders[index].enabled = !updatedProviders[index].enabled;
    setProviders(updatedProviders);
  };

  return (
    <div className="container-fluid ">
      <div className="">
        <h3>Billing Providers</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Billing Provider</th>
              <th>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider, index) => (
              <tr key={index}>
                <td>{provider.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={provider.enabled}
                    onChange={() => toggleProviderStatus(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}

export default BillingProviders;
