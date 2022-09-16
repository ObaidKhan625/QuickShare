#include "bits/stdc++.h"
#define ll long long int
#define frn(a, b) for(int i = a; i < b; i++)
#define nline "\n"

using namespace std;

const int MOD=1000000007;

// Negative number mod
// (sum%n + n)%n;

#define deb(...) logger(#__VA_ARGS__, __VA_ARGS__)
template<typename ...Args>
void logger(string vars, Args&&... values) {
    cout << vars << " = ";
    string delim = "";
    (..., (cout << delim << values, delim = ", "));
    cout << nline;
}

ll power(ll x, ll y)
{
    ll res = 1;
    x = x % MOD; 
    if (x == 0) return 0;
    while (y > 0)
    {
        if (y & 1)
            res = (res*x) % MOD;
        y = y>>1;
        x = (x*x) % MOD;
    }
    return res;
}

void print_array(auto arr[], int n) {
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << "\n";
}

void print_vector(vector<int> v) {
    int n = v.size();
    for(int i = 0; i < n; i++) cout << v[i] << " ";
    cout << "\n";
}

void find(vector<vector<int>> &v, int i, int j, int &k, int rem) {

}

void Solve() {
    int n, q;
    cin >> n >> q;
    ll k; cin >> k;
    vector<ll> v(n+1);
    for(int i = 1; i <= n; i++)
        cin >> v[i];
    vector<ll> preV(n+1, 0);
    for(int i = 2; i <= n-1; i++) {
        preV[i] = v[i+1]-v[i]-1 + v[i]-v[i-1]-1;
    }
    preV[1] = v[1]-1 + v[2]-v[1]-1;
    preV[n] += k-v[n];
    for(int i = 2; i <= n; i++)
        preV[i] += preV[i-1];
    // for(int i = 1; i <= n; i++)
    //     cout << preV[i] << " ";
    // cout << nline;
    while(q--) {
        int l, r; cin >> l >> r;
        if(n == 1) {
            cout << k-1 << nline;
            return;
        }
        ll ans = preV[r]-preV[l-1];
        ans += v[l-1];
        ans -= r < n ? v[r+1]-v[r]-1 : 0;
        ans += r < n ? k-v[r] : 0;
        cout << ans << nline;
    }
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // int t;
    // cin >> t;
    // while(t--)
    Solve();
    return 0;
}

